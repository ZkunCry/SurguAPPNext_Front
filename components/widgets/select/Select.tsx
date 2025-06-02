"use client";
import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, Check } from "lucide-react";

export interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

interface SelectMenuProps {
  options: SelectOption[];
  value: string | null;
  onChange: (value: string) => void;
  placeholder?: string;
  isDisabled?: boolean;
  isSearchable?: boolean;
  className?: string;
}

const SelectMenu: React.FC<SelectMenuProps> = ({
  options,
  value,
  onChange,
  placeholder = "Select...",
  isDisabled = false,
  isSearchable = false,
  className = "",
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const wrapperRef = useRef<HTMLDivElement>(null);
  const selectedOption = options.find((opt) => opt.value === value);

  const filteredOptions = options.filter((opt) =>
    opt.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelect = (value: string) => {
    onChange(value);
    setIsOpen(false);
    setSearchTerm("");
  };

  return (
    <div
      ref={wrapperRef}
      className={`relative w-full max-w-[500px] ${className}`}
    >
      <div
        className={`
          flex items-center justify-between p-2.5 rounded-md border ${
            isDisabled
              ? "bg-gray-50 cursor-not-allowed"
              : "bg-white hover:border-gray-400 cursor-pointer"
          }
          ${isOpen ? "border-blue-500 ring-1 ring-blue-500" : "border-gray-300"}
        `}
        onClick={() => !isDisabled && setIsOpen(!isOpen)}
      >
        <div className="flex items-center truncate">
          {selectedOption ? (
            <span className="text-gray-900">{selectedOption.label}</span>
          ) : (
            <span className="text-gray-500">{placeholder}</span>
          )}
        </div>
        <ChevronDown
          className={`w-5 h-5 text-gray-400 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </div>

      {isOpen && !isDisabled && (
        <div className="absolute z-10 w-full mt-1.5 bg-white rounded-md shadow-lg border border-gray-200">
          {isSearchable && (
            <div className="p-2 border-b border-gray-200">
              <input
                type="text"
                placeholder="Search..."
                className="w-full p-1.5 text-sm border rounded-md focus:outline-hidden focus:ring-1 focus:ring-blue-500"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                autoFocus
              />
            </div>
          )}

          <div className="py-1 max-h-60 overflow-auto">
            {filteredOptions.map((option) => (
              <div
                key={option.value}
                className={`
                  flex items-center justify-between px-3 py-2 cursor-pointer
                  ${
                    option.disabled
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:bg-gray-50"
                  }
                  ${value === option.value ? "bg-blue-50" : ""}
                `}
                onClick={() => !option.disabled && handleSelect(option.value)}
              >
                <span
                  className={
                    value === option.value ? "text-blue-600" : "text-gray-900"
                  }
                >
                  {option.label}
                </span>
                {value === option.value && (
                  <Check className="w-4 h-4 text-blue-600" />
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SelectMenu;
