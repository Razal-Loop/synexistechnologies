"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Calendar as CalendarIcon,
  Clock,
  User,
  Mail,
  Phone,
  MessageSquare,
  ChevronLeft,
  ChevronRight,
  CheckCircle,
  ArrowLeft,
  Loader2,
} from "lucide-react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { submitBooking, cancelBooking } from "@/app/actions/book";

const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const WEEK_DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

const TIME_SLOTS = [
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
];

// Helper to get current Date in USA Eastern Time
const getUSDate = (date = new Date()) => {
  const formatter = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/New_York",
    year: "numeric",
    month: "numeric",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: false,
  });
  const parts = formatter.formatToParts(date);
  const val: Record<string, number> = {};
  for (const part of parts) {
    if (part.type !== "literal") {
      val[part.type] = parseInt(part.value, 10);
    }
  }
  return new Date(val.year, val.month - 1, val.day, val.hour, val.minute, val.second);
};

// Helper to get days in a month
const getDaysInMonth = (year: number, month: number) => {
  return new Date(year, month + 1, 0).getDate();
};

// Helper to get start day of the month (0 = Sun, 1 = Mon, etc.)
const getStartDayOfMonth = (year: number, month: number) => {
  return new Date(year, month, 1).getDay();
};

export default function BookPage() {
  const today = getUSDate();
  const currentYear = today.getFullYear();
  const currentMonth = today.getMonth();
  const currentDay = today.getDate();

  // Calendar navigation state
  const [navYear, setNavYear] = useState(currentYear);
  const [navMonth, setNavMonth] = useState(currentMonth);

  // Booking states
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string | null>(null);

  // Form states
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [details, setDetails] = useState("");

  // Navigation handlers
  const handlePrevMonth = () => {
    if (navYear === currentYear && navMonth === currentMonth) return; // Prevent going to past months
    if (navMonth === 0) {
      setNavMonth(11);
      setNavYear(navYear - 1);
    } else {
      setNavMonth(navMonth - 1);
    }
  };

  const handleNextMonth = () => {
    // Only allow booking up to 6 months ahead
    const maxDate = new Date(currentYear, currentMonth + 6, 1);
    if (navYear === maxDate.getFullYear() && navMonth === maxDate.getMonth()) return;

    if (navMonth === 11) {
      setNavMonth(0);
      setNavYear(navYear + 1);
    } else {
      setNavMonth(navMonth + 1);
    }
  };

  const isPastDate = (day: number) => {
    const checkDate = new Date(navYear, navMonth, day);
    const todayCompare = new Date(currentYear, currentMonth, currentDay);
    return checkDate < todayCompare;
  };

  const isWeekend = (day: number) => {
    const checkDate = new Date(navYear, navMonth, day);
    const dayOfWeek = checkDate.getDay();
    return dayOfWeek === 0 || dayOfWeek === 6; // Sunday or Saturday
  };

  const isSlotPast = (slot: string) => {
    if (!selectedDate) return false;
    const usToday = getUSDate();
    const isToday =
      selectedDate.getDate() === usToday.getDate() &&
      selectedDate.getMonth() === usToday.getMonth() &&
      selectedDate.getFullYear() === usToday.getFullYear();

    if (!isToday) return false;

    const [time, modifier] = slot.split(" ");
    const [hoursStr, minutesStr] = time.split(":");
    let hours = parseInt(hoursStr, 10);
    const minutes = parseInt(minutesStr, 10);
    if (modifier === "PM" && hours < 12) {
      hours += 12;
    }
    if (modifier === "AM" && hours === 12) {
      hours = 0;
    }

    const currentUSHour = usToday.getHours();
    const currentUSMinute = usToday.getMinutes();

    if (hours < currentUSHour) {
      return true;
    }
    if (hours === currentUSHour && minutes <= currentUSMinute) {
      return true;
    }

    return false;
  };

  const handleDateClick = (day: number) => {
    if (isPastDate(day) || isWeekend(day)) return;
    const clicked = new Date(navYear, navMonth, day);
    setSelectedDate(clicked);
    setSelectedTimeSlot(null); // Reset time slot on date change
    setStep(2); // Auto-advance to time slot selection
  };

  const handleTimeSlotClick = (slot: string) => {
    setSelectedTimeSlot(slot);
    setStep(3); // Auto-advance to details form
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDate || !selectedTimeSlot || !name || !email || !phone) {
      setErrorMsg("Please fill out all required fields.");
      return;
    }

    setLoading(true);
    setErrorMsg("");

    const formattedDate = selectedDate.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phone", phone);
    formData.append("date", formattedDate);
    formData.append("timeSlot", selectedTimeSlot);
    formData.append("details", details);

    try {
      const res = await submitBooking(formData);
      if (res.success) {
        setStep(4); // Success screen
      } else {
        setErrorMsg(res.error || "Failed to book appointment. Please try again.");
      }
    } catch {
      setErrorMsg("An unexpected network error occurred.");
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = async () => {
    if (!selectedDate || !selectedTimeSlot) return;
    setLoading(true);
    setErrorMsg("");

    const formattedDate = selectedDate.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("date", formattedDate);
    formData.append("timeSlot", selectedTimeSlot);

    try {
      const res = await cancelBooking(formData);
      if (res.success) {
        setStep(5); // Cancellation success screen
      } else {
        setErrorMsg(res.error || "Failed to cancel appointment.");
      }
    } catch {
      setErrorMsg("An unexpected network error occurred during cancellation.");
    } finally {
      setLoading(false);
    }
  };

  const daysInMonth = getDaysInMonth(navYear, navMonth);
  const startDay = getStartDayOfMonth(navYear, navMonth);

  // Generate blank spots for starting offset of the month
  const blanks = Array(startDay).fill(null);
  // Generate days array
  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
  const totalSlots = [...blanks, ...days];

  return (
    <main className="min-h-screen bg-background relative overflow-hidden flex flex-col justify-between">
      {/* Decorative ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-brand-primary/10 blur-[130px] rounded-full pointer-events-none -z-10" />

      <Navbar />

      <section className="pt-32 pb-24 px-6 relative z-10 flex-grow flex items-center justify-center">
        <div className="max-w-4xl w-full mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl font-black text-white mb-4 uppercase italic tracking-tighter">
              Book a <span className="text-brand-primary">Consultation</span>
            </h1>
            <p className="text-slate-400 text-sm md:text-base max-w-xl mx-auto font-medium">
              Select an available date and time slot to schedule your 1-on-1 strategy call with our engineering and marketing team.
            </p>
          </div>

          {/* Booking Container */}
          <div className="bg-slate-950/70 border border-slate-800/80 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl p-6 md:p-10 relative">
            
            {/* Step Indicator */}
            {step < 4 && (
              <div className="flex items-center justify-between mb-8 pb-6 border-b border-slate-900/60">
                <div className="flex items-center gap-2">
                  {step > 1 && (
                    <button
                      onClick={handleBack}
                      className="p-2 rounded-xl bg-slate-900 hover:bg-brand-primary/10 border border-slate-800 text-slate-400 hover:text-brand-primary transition-all flex items-center justify-center mr-2"
                    >
                      <ArrowLeft className="w-4 h-4" />
                    </button>
                  )}
                  <span className="text-xs uppercase tracking-widest font-black text-brand-primary">
                    Step {step} of 3
                  </span>
                </div>
                <div className="flex gap-2">
                  {[1, 2, 3].map((s) => (
                    <div
                      key={s}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        s === step
                          ? "w-8 bg-brand-primary"
                          : s < step
                          ? "w-4 bg-emerald-500"
                          : "w-2 bg-slate-800"
                      }`}
                    />
                  ))}
                </div>
              </div>
            )}

            <AnimatePresence mode="wait">
              {/* STEP 1: Select Date */}
              {step === 1 && (
                <motion.div
                  key="step1"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                      <CalendarIcon className="w-5 h-5 text-brand-primary" />
                      Select Date
                    </h3>
                    <div className="flex items-center gap-3">
                      <button
                        onClick={handlePrevMonth}
                        disabled={navYear === currentYear && navMonth === currentMonth}
                        className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-white disabled:opacity-40 disabled:hover:bg-slate-900 transition-colors flex items-center justify-center"
                      >
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <span className="text-sm font-bold text-white min-w-[120px] text-center uppercase tracking-wider">
                        {MONTH_NAMES[navMonth]} {navYear}
                      </span>
                      <button
                        onClick={handleNextMonth}
                        className="p-2 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-800 text-white disabled:opacity-40 transition-colors flex items-center justify-center"
                      >
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </div>
                  </div>

                  {/* Calendar Grid */}
                  <div className="grid grid-cols-7 gap-2 mb-6">
                    {/* Weekday Labels */}
                    {WEEK_DAYS.map((d) => (
                      <div
                        key={d}
                        className="text-center text-xs font-black text-slate-500 uppercase tracking-widest py-2"
                      >
                        {d}
                      </div>
                    ))}

                    {/* Day Cells */}
                    {totalSlots.map((day, idx) => {
                      if (day === null) {
                        return <div key={`empty-${idx}`} />;
                      }

                      const isPast = isPastDate(day);
                      const isWknd = isWeekend(day);
                      const isDisabled = isPast || isWknd;
                      const isSelected =
                        selectedDate?.getDate() === day &&
                        selectedDate?.getMonth() === navMonth &&
                        selectedDate?.getFullYear() === navYear;

                      return (
                        <button
                          key={`day-${day}`}
                          disabled={isDisabled}
                          onClick={() => handleDateClick(day)}
                          className={`h-12 w-full rounded-2xl text-sm font-bold transition-all flex items-center justify-center border relative ${
                            isSelected
                              ? "bg-brand-primary text-white border-brand-primary shadow-[0_0_15px_rgba(37,99,235,0.4)] scale-105"
                              : isDisabled
                              ? "text-slate-700 border-transparent cursor-not-allowed bg-slate-900/10"
                              : "text-slate-300 border-slate-900 hover:border-brand-primary/50 hover:bg-brand-primary/5 bg-slate-900/30"
                          }`}
                        >
                          {day}
                          {/* Dot indicator for selected date */}
                          {isSelected && (
                            <span className="absolute bottom-1 w-1.5 h-1.5 bg-white rounded-full" />
                          )}
                        </button>
                      );
                    })}
                  </div>

                  <div className="flex gap-6 justify-center text-xs text-slate-500 border-t border-slate-900/60 pt-6">
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded bg-brand-primary" /> Selected
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded bg-slate-900/30 border border-slate-900" /> Available
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="w-3 h-3 rounded bg-slate-900/10" /> Unavailable
                    </div>
                  </div>
                </motion.div>
              )}

              {/* STEP 2: Select Time Slot */}
              {step === 2 && (
                <motion.div
                  key="step2"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                    <div>
                      <h3 className="text-xl font-bold text-white flex items-center gap-2">
                        <Clock className="w-5 h-5 text-brand-primary" />
                        Select Time Slot
                      </h3>
                      <p className="text-xs text-slate-500 mt-1">
                        All times are in US Eastern Time (ET)
                      </p>
                    </div>
                    <span className="text-sm font-bold text-brand-primary bg-brand-primary/10 px-4 py-1.5 border border-brand-primary/20 rounded-full self-start sm:self-auto">
                      {selectedDate?.toLocaleDateString("en-US", {
                        weekday: "short",
                        month: "short",
                        day: "numeric",
                      })}
                    </span>
                  </div>

                  {/* Time Slots Grid */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                    {TIME_SLOTS.map((slot) => {
                      const isSelected = selectedTimeSlot === slot;
                      const isPast = isSlotPast(slot);
                      return (
                        <button
                          key={slot}
                          disabled={isPast}
                          onClick={() => handleTimeSlotClick(slot)}
                          className={`py-4 px-6 rounded-2xl text-sm font-bold transition-all border text-center ${
                            isSelected
                              ? "bg-brand-primary text-white border-brand-primary shadow-[0_0_15px_rgba(37,99,235,0.4)] scale-105"
                              : isPast
                              ? "text-slate-700 border-transparent cursor-not-allowed bg-slate-900/10"
                              : "text-slate-300 border-slate-800 hover:border-brand-primary/50 hover:bg-brand-primary/5 bg-slate-900/30"
                          }`}
                        >
                          {slot}
                        </button>
                      );
                    })}
                  </div>
                </motion.div>
              )}

              {/* STEP 3: Provide Details */}
              {step === 3 && (
                <motion.div
                  key="step3"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="flex items-center justify-between mb-8">
                    <h3 className="text-xl font-bold text-white flex items-center gap-2">
                      <User className="w-5 h-5 text-brand-primary" />
                      Confirm Details
                    </h3>
                    <div className="flex flex-col items-end gap-1">
                      <span className="text-xs font-bold text-slate-400">
                        {selectedDate?.toLocaleDateString("en-US", {
                          weekday: "short",
                          month: "short",
                          day: "numeric",
                        })}
                      </span>
                      <span className="text-xs font-black text-brand-primary">
                        at {selectedTimeSlot} (ET)
                      </span>
                    </div>
                  </div>

                  {errorMsg && (
                    <div className="p-4 mb-6 rounded-2xl bg-rose-500/10 border border-rose-500/20 text-rose-400 text-sm font-bold">
                      {errorMsg}
                    </div>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-xs font-black uppercase tracking-wider text-slate-400 ml-1">
                          Full Name
                        </label>
                        <div className="relative">
                          <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                          <input
                            required
                            type="text"
                            placeholder="John Smith"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full bg-slate-900/50 border border-slate-800 rounded-2xl py-4 pl-12 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-brand-primary transition-all placeholder:text-slate-600 font-medium"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label className="text-xs font-black uppercase tracking-wider text-slate-400 ml-1">
                          Email Address
                        </label>
                        <div className="relative">
                          <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                          <input
                            required
                            type="email"
                            placeholder="john@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full bg-slate-900/50 border border-slate-800 rounded-2xl py-4 pl-12 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-brand-primary transition-all placeholder:text-slate-600 font-medium"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-wider text-slate-400 ml-1">
                        Phone Number
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                        <input
                          required
                          type="tel"
                          placeholder="(123) 456-7890"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full bg-slate-900/50 border border-slate-800 rounded-2xl py-4 pl-12 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-brand-primary transition-all placeholder:text-slate-600 font-medium"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-black uppercase tracking-wider text-slate-400 ml-1">
                        Project Goals & Details (Optional)
                      </label>
                      <div className="relative">
                        <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-slate-500" />
                        <textarea
                          placeholder="Tell us a bit about your project or what you want to achieve..."
                          rows={4}
                          value={details}
                          onChange={(e) => setDetails(e.target.value)}
                          className="w-full bg-slate-900/50 border border-slate-800 rounded-2xl py-4 pl-12 pr-4 text-white focus:outline-none focus:ring-2 focus:ring-brand-primary transition-all placeholder:text-slate-600 font-medium resize-none"
                        />
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full py-4 bg-brand-primary hover:bg-slate-900 text-white rounded-2xl text-base font-black transition-all shadow-md shadow-brand-primary/20 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Confirming booking...
                        </>
                      ) : (
                        "Book Strategic Consultation"
                      )}
                    </button>
                  </form>
                </motion.div>
              )}

              {/* STEP 4: Success Screen */}
              {step === 4 && (
                <motion.div
                  key="step4"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, type: "spring" }}
                  className="text-center py-10"
                >
                  <div className="flex justify-center mb-6">
                    <div className="w-20 h-20 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shadow-[0_0_30px_rgba(16,185,129,0.2)]">
                      <CheckCircle className="w-12 h-12 text-emerald-400" />
                    </div>
                  </div>

                  <h2 className="text-3xl font-black text-white mb-4 tracking-tight">
                    Booking Confirmed!
                  </h2>
                  <p className="text-slate-300 text-base max-w-md mx-auto mb-8 font-medium">
                    Thank you, <span className="text-white font-bold">{name}</span>. Your strategy call has been scheduled. A confirmation email has been dispatched.
                  </p>

                  {/* Summary Block */}
                  <div className="max-w-md mx-auto bg-slate-900/40 border border-slate-800 rounded-3xl p-6 mb-8 text-left space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center">
                        <CalendarIcon className="w-5 h-5 text-brand-primary" />
                      </div>
                      <div>
                        <span className="text-xs text-slate-500 font-bold uppercase tracking-widest block">Date</span>
                        <span className="text-sm font-bold text-white">
                          {selectedDate?.toLocaleDateString("en-US", {
                            weekday: "long",
                            month: "long",
                            day: "numeric",
                            year: "numeric",
                          })}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-xl bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center">
                        <Clock className="w-5 h-5 text-brand-primary" />
                      </div>
                      <div>
                        <span className="text-xs text-slate-500 font-bold uppercase tracking-widest block">Time Slot</span>
                        <span className="text-sm font-bold text-white">{selectedTimeSlot} (Eastern Time)</span>
                      </div>
                    </div>
                  </div>

                  {errorMsg && (
                    <div className="p-4 mb-6 rounded-2xl bg-rose-500/10 border border-rose-500/20 text-rose-400 text-sm font-bold max-w-md mx-auto">
                      {errorMsg}
                    </div>
                  )}

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Link
                      href="/"
                      className="w-full sm:w-auto px-8 py-4 bg-brand-primary hover:bg-slate-900 text-white rounded-2xl text-base font-black transition-all hover:scale-105 active:scale-95 shadow-md shadow-brand-primary/20"
                    >
                      Return Home
                    </Link>
                    <button
                      onClick={handleCancel}
                      disabled={loading}
                      className="w-full sm:w-auto px-8 py-4 bg-slate-900 hover:bg-rose-950/20 text-rose-400 hover:text-rose-300 border border-slate-800 hover:border-rose-500/30 rounded-2xl text-base font-black transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                    >
                      {loading ? (
                        <>
                          <Loader2 className="w-4 h-4 animate-spin" />
                          Cancelling...
                        </>
                      ) : (
                        "Cancel Appointment"
                      )}
                    </button>
                  </div>
                </motion.div>
              )}

              {/* STEP 5: Cancellation Screen */}
              {step === 5 && (
                <motion.div
                  key="step5"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, type: "spring" }}
                  className="text-center py-10"
                >
                  <div className="flex justify-center mb-6">
                    <div className="w-20 h-20 rounded-full bg-rose-500/10 border border-rose-500/20 flex items-center justify-center shadow-[0_0_30px_rgba(239,68,68,0.2)]">
                      <CheckCircle className="w-12 h-12 text-rose-400" />
                    </div>
                  </div>

                  <h2 className="text-3xl font-black text-white mb-4 tracking-tight">
                    Appointment Cancelled
                  </h2>
                  <p className="text-slate-300 text-base max-w-md mx-auto mb-8 font-medium">
                    Your strategy call for <span className="text-white font-bold">{selectedDate?.toLocaleDateString("en-US", { month: "long", day: "numeric" })} at {selectedTimeSlot}</span> has been successfully cancelled. A cancellation notification has been sent.
                  </p>

                  <Link
                    href="/"
                    className="inline-flex px-8 py-4 bg-brand-primary hover:bg-slate-900 text-white rounded-2xl text-base font-black transition-all hover:scale-105 active:scale-95 shadow-md shadow-brand-primary/20"
                  >
                    Return Home
                  </Link>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
