import React, { useState, useRef } from "react";

function CustomRadio({ name, value, checked, onChange, label }) {
  return (
    <label className="flex items-center gap-2 cursor-pointer select-none">
      <span className="relative flex items-center justify-center w-5 h-5">
        <input
          type="radio"
          name={name}
          value={value}
          checked={checked}
          onChange={onChange}
          className="peer absolute w-full h-full opacity-0 cursor-pointer m-0"
        />
        <span
          className={
            `block w-5 h-5 rounded-full border border-solid border-[#D1D5DB] bg-white transition-colors duration-150 ` +
            `peer-checked:border-[#0d8360] peer-checked:bg-[#0d8360]`
          }
        >
          <span className="absolute left-1/2 top-1/2 w-2.5 h-2.5 rounded-full bg-white opacity-0 peer-checked:opacity-100 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-150" />
        </span>
        <span
          className="absolute left-1/2 top-1/2 w-2.5 h-2.5 rounded-full bg-white opacity-0 peer-checked:opacity-100 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-150"
        />
      </span>
      <span className="text-[16px] text-[#252525] font-funnel">{label}</span>
    </label>
  );
}

function CustomDropdown({ options, value, onChange, placeholder }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  React.useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    if (open) document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [open]);

  return (
    <div ref={ref} className="relative w-full ">
      <button
        type="button"
        className={`border-[1px] border-[rgba(37,37,37,0.1)] rounded-full px-4 pr-10 py-3 w-full md:text-[16px] text-[14px] font-funnel bg-white text-left focus:border-[#0d8360] focus:outline-none flex items-center justify-between ${open ? 'ring-1 ring-[#0d8360]' : ''}`}
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span className={value ? "text-[#252525]" : "text-[#B0B0B0]"}>
          {value || placeholder}
        </span>
        <span className="pointer-events-none absolute right-4 top-1/2 transform -translate-y-1/2 text-[#B0B0B0]">
          <svg width="20" height="20" fill="none" viewBox="0 0 20 20"><path d="M6 8l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
        </span>
      </button>
      {open && (
        <ul
          className="absolute z-10 mt-2 w-full bg-white border border-[rgba(37,37,37,0.1)] rounded-xl shadow-lg max-h-60 overflow-auto"
          tabIndex={-1}
          role="listbox"
        >
          {options.map((option) => (
            <li
              key={option}
              role="option"
              aria-selected={value === option}
              className={`px-4 py-2 cursor-pointer font-funnel text-[15px] ${value === option ? 'bg-[#0d8360] text-white' : 'hover:bg-[#0d8360] hover:text-white text-[#252525]'}`}
              onClick={() => {
                onChange(option);
                setOpen(false);
              }}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
import QuizHeader from "./QuizHeader";
import QuizNavigation from "./QuizNavigation";

const Step1PersonalInfo = ({ onNext, onBack, previousData }) => {
  const [formData, setFormData] = useState(
    previousData || {
      ageRange: "",
      gender: "",
      height: "",
      weight: "",
      primaryGoal: "",
      activityLevel: "",
      postWorkoutFeeling: "",
      sleepStress: "",
      jointPain: "",
      lowEnergy: "",
    }
  );
  const [errors, setErrors] = useState({ height: "", weight: "" });

  const ageRanges = ["18-24", "25-34", "35-44", "45-54", "55+"];
  const genders = ["Male", "Female", "Other", "Prefer not to say"];

  const handleNext = () => {
    let valid = true;
    let newErrors = { height: "", weight: "" };
    const heightNum = Number(formData.height);
    const weightNum = Number(formData.weight);
    if (formData.height === "" || heightNum < 0) {
      newErrors.height = "Height cannot be negative.";
      valid = false;
    } else if (heightNum > 400) {
      newErrors.height = "Height cannot be more than 400 cm.";
      valid = false;
    }
    if (formData.weight === "" || weightNum < 0) {
      newErrors.weight = "Weight cannot be negative.";
      valid = false;
    }
    setErrors(newErrors);
    if (
      valid &&
      formData.ageRange &&
      formData.gender &&
      formData.height &&
      formData.weight &&
      formData.primaryGoal &&
      formData.activityLevel &&
      formData.postWorkoutFeeling &&
      formData.sleepStress &&
      formData.jointPain &&
      formData.lowEnergy
    ) {
      onNext(formData);
    }
  };

  const isValid =
    formData.ageRange &&
    formData.gender &&
    formData.height &&
    formData.weight &&
    formData.primaryGoal &&
    formData.activityLevel &&
    formData.postWorkoutFeeling &&
    formData.sleepStress &&
    formData.jointPain &&
    formData.lowEnergy &&
    !errors.height &&
    !errors.weight;

  const primaryGoals = [
    "Recover faster and reduce soreness",
    "Increase strength or endurance",
    "Improve focus, mood, or mental clarity",
    "Strengthen immunity and overall vitality",
  ];
  const activityLevels = [
    "Light activity (1–2 easy sessions or walks)",
    "Moderate activity (3–4 structured workouts)",
    "Intense or competitive activity (5+ intense sessions)",
  ];
  const postWorkoutFeelings = [
    "I feel refreshed and ready to go again",
    "Slightly sore or fatigued, but manageable",
    "Very sore, stiff, or drained",
    "More mentally drained than physically tired",
  ];
  const sleepStressLevels = [
    "I sleep well and manage stress well",
    "Sleep is okay and stress comes and goes",
    "I struggle with sleep and frequent stress",
    "I have poor sleep and high stress most of the time",
  ];
  const jointPainLevels = [
    "Rarely or never",
    "Occasionally, but it’s not too bothersome",
    "It happens often, especially after activity",
    "It’s a persistent issue that affects my daily life",
  ];
  const lowEnergyLevels = [
    "Rarely – I feel energized most of the time",
    "Occasionally, but I bounce back quickly",
    "Often, I feel drained or fatigued",
    "I feel low energy and fatigued all the time",
  ];

  return (
    <div className="min-h-screen bg-[#f1f1f1] py-8">
      <div className="max-w-[929px] mx-auto px-4">
        <div className="bg-white rounded-2xl px-4 pt-6 pb-4 md:p-9 min-h-[544px] flex flex-col">
          <h3 className="text-[#252525] text-[32px] font-[600] mb-8 font-[DM Sans] text-center">Optigenix Supplement Quiz</h3>
          {/* <QuizHeader
            title="Tell us about yourself"
            currentStep={1}
            totalSteps={7}
          /> */}

          <div className="flex-1 flex flex-col gap-[17px]">

            <div className="flex flex-col gap-2 py-1">
              <label className="md:text-[18px] text-[16px] font-semibold text-[#252525] font-funnel mb-1">
                What is your age range?
              </label>
              <CustomDropdown
                options={ageRanges}
                value={formData.ageRange}
                onChange={age => setFormData({ ...formData, ageRange: age })}
                placeholder="Please Choose..."
              />
            </div>

            <div className="flex flex-col gap-2 py-1">
              <label className="md:text-[18px] text-[16px] font-semibold text-[#252525] font-funnel mb-1">
                What is your gender?
              </label>
              <CustomDropdown
                options={genders}
                value={formData.gender}
                onChange={gender => setFormData({ ...formData, gender })}
                placeholder="Please Choose..."
              />
            </div>

            <div className="flex flex-col gap-2 py-1">
              <label className="md:text-[18px] text-[16px] font-semibold text-[#252525] font-funnel mb-1">
                What is your height (cm)?
              </label>
              <input
                type="number"
                min="0"
                max="400"
                placeholder="e.g., 175"
                value={formData.height}
                onChange={e => {
                  const val = e.target.value;
                  setFormData({ ...formData, height: val });
                  let msg = "";
                  if (val === "" || Number(val) < 0) msg = "Height cannot be negative.";
                  else if (Number(val) > 400) msg = "Height cannot be more than 400 cm.";
                  setErrors((prev) => ({ ...prev, height: msg }));
                }}
                className="border border-solid border-[#D1D5DB] rounded-full px-4 py-3 w-full md:text-[16px] text-[14px] font-funnel placeholder:text-[rgba(37,37,37,0.3)] focus:border-[#0d8360] focus:outline-none bg-white appearance-none"
              />
              {errors.height && <span className="text-red-500 text-xs mt-1">{errors.height}</span>}
            </div>

            <div className="flex flex-col gap-2 py-1">
              <label className="md:text-[18px] text-[16px] font-semibold text-[#252525] font-funnel mb-1">
                What is your weight (kg)?
              </label>
              <input
                type="number"
                min="0"
                placeholder="e.g., 85"
                value={formData.weight}
                onChange={e => {
                  const val = e.target.value;
                  setFormData({ ...formData, weight: val });
                  let msg = "";
                  if (val === "" || Number(val) < 0) msg = "Weight cannot be negative.";
                  setErrors((prev) => ({ ...prev, weight: msg }));
                }}
                className="border border-solid border-[#D1D5DB] rounded-full px-4 py-3 w-full md:text-[16px] text-[14px] font-funnel placeholder:text-[rgba(37,37,37,0.3)] focus:border-[#0d8360] focus:outline-none bg-white appearance-none"
              />
              {errors.weight && <span className="text-red-500 text-xs mt-1">{errors.weight}</span>}
            </div>

            
            <div className="flex flex-col gap-4 py-1">
              <p className="md:text-[18px] text-[16px] font-semibold text-[#252525] font-funnel">
                What is your primary goal right now?
              </p>
              <div className="flex flex-col gap-[12px]">
                {primaryGoals.map((goal) => (
                  <CustomRadio
                    key={goal}
                    name="primaryGoal"
                    value={goal}
                    checked={formData.primaryGoal === goal}
                    onChange={() => setFormData({ ...formData, primaryGoal: goal })}
                    label={goal}
                  />
                ))}
              </div>
            </div>

           
            <div className="flex flex-col gap-4 py-1">
              <p className="md:text-[18px] text-[16px] font-semibold text-[#252525] font-funnel">
                How active are you on a typical week?
              </p>
              <div className="flex flex-col gap-[12px]">
                {activityLevels.map((level) => (
                  <CustomRadio
                    key={level}
                    name="activityLevel"
                    value={level}
                    checked={formData.activityLevel === level}
                    onChange={() => setFormData({ ...formData, activityLevel: level })}
                    label={level}
                  />
                ))}
              </div>
            </div>

           
            <div className="flex flex-col gap-4 py-1">
              <p className="md:text-[18px] text-[16px] font-semibold text-[#252525] font-funnel">
                How do you typically feel after workouts or long days?
              </p>
              <div className="flex flex-col gap-[12px]">
                {postWorkoutFeelings.map((feeling) => (
                  <CustomRadio
                    key={feeling}
                    name="postWorkoutFeeling"
                    value={feeling}
                    checked={formData.postWorkoutFeeling === feeling}
                    onChange={() => setFormData({ ...formData, postWorkoutFeeling: feeling })}
                    label={feeling}
                  />
                ))}
              </div>
            </div>

          
            <div className="flex flex-col gap-4 py-1">
              <p className="md:text-[18px] text-[16px] font-semibold text-[#252525] font-funnel">
                How would you describe your sleep and stress levels?
              </p>
              <div className="flex flex-col gap-[12px]">
                {sleepStressLevels.map((level) => (
                  <CustomRadio
                    key={level}
                    name="sleepStress"
                    value={level}
                    checked={formData.sleepStress === level}
                    onChange={() => setFormData({ ...formData, sleepStress: level })}
                    label={level}
                  />
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4 py-1">
              <p className="md:text-[18px] text-[16px] font-semibold text-[#252525] font-funnel">
                How often do you experience joint pain or stiffness?
              </p>
              <div className="flex flex-col gap-[12px]">
                {jointPainLevels.map((level) => (
                  <CustomRadio
                    key={level}
                    name="jointPain"
                    value={level}
                    checked={formData.jointPain === level}
                    onChange={() => setFormData({ ...formData, jointPain: level })}
                    label={level}
                  />
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-4 py-1">
              <p className="md:text-[18px] text-[16px] font-semibold text-[#252525] font-funnel">
                How often do you feel low energy or “run down”?
              </p>
              <div className="flex flex-col gap-[12px]">
                {lowEnergyLevels.map((level) => (
                  <CustomRadio
                    key={level}
                    name="lowEnergy"
                    value={level}
                    checked={formData.lowEnergy === level}
                    onChange={() => setFormData({ ...formData, lowEnergy: level })}
                    label={level}
                  />
                ))}
              </div>
            </div>
          </div>

          <QuizNavigation
            // onBack={onBack}
            onNext={handleNext}
            showBack={false}
            disabled={!isValid}
          />
        </div>
      </div>
    </div>
  );
};

export default Step1PersonalInfo;
