"use client";
import { useState, useRef, useCallback } from "react";
import { useMutation } from "@tanstack/react-query";
import Title from "@/components/widgets/main/Title";
import { Upload, File, X, Check, Loader2 } from "lucide-react";
import axiosInstance from "@/utils/axiosInstance";
const validExtensions = [".xls", ".xlsx"];
export default function UploadPage() {
  const [file, setFile] = useState<File | null>(null);
  const [isDragActive, setIsDragActive] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const mutation = useMutation({
    mutationFn: (formData: FormData) =>
      axiosInstance.post("/xlsx/student", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      }),
  });

  const handleFileChange = (selectedFile: File) => {
    if (!selectedFile) return;

    const fileExtension = selectedFile.name.slice(
      ((selectedFile.name.lastIndexOf(".") - 1) >>> 0) + 2
    );

    if (!validExtensions.includes("." + fileExtension.toLowerCase())) {
      setError("Пожалуйста, загрузите файл в формате .xls или .xlsx");
      return;
    }

    if (selectedFile.size > 5 * 1024 * 1024) {
      setError("Файл слишком большой. Максимальный размер: 5MB");
      return;
    }

    setFile(selectedFile);
    setError(null);
  };

  const handleDrag = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (e.type === "dragenter" || e.type === "dragover") {
      setIsDragActive(true);
    } else if (e.type === "dragleave") {
      setIsDragActive(false);
    }
  }, []);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileChange(e.dataTransfer.files[0]);
    }
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFileChange(e.target.files[0]);
    }
  };

  const handleSubmit = () => {
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);
    mutation.mutate(formData);
  };

  const resetFile = () => {
    setFile(null);
    setError(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  return (
    <div className="container fade-in ">
      <Title page="Загрузка расписания" />

      <div className="flex flex-col items-center mt-8 bg-maincolor  rounded-[10px] px-[10px] py-[20px]">
        <div
          className={`relative w-full max-w-2xl p-8 rounded-2xl border-2 border-dashed transition-all
            ${
              isDragActive
                ? "border-[var(--color-primary)] bg-[var(--color-accent)]"
                : "border-[var(--color-border)]"
            }
            ${error ? "border-[var(--color-error-border)]" : ""}
          `}
          onDragEnter={handleDrag}
          onDragOver={handleDrag}
          onDragLeave={handleDrag}
          onDrop={handleDrop}
        >
          <input
            ref={fileInputRef}
            type="file"
            accept=".xls,.xlsx"
            className={`absolute ${
              file ? "z-0 relative" : ""
            } inset-0 w-full h-full opacity-0 cursor-pointer`}
            onChange={handleInputChange}
          />

          <div className="flex flex-col items-center justify-center text-center ">
            {file ? (
              <div className="flex flex-col items-center w-full">
                <div className="flex items-center bg-[var(--color-accent)] rounded-lg p-4 w-full mb-4">
                  <File
                    className="text-[var(--color-primary)] mr-3"
                    size={24}
                  />
                  <span className="truncate flex-1 text-[var(--color-text)]">
                    {file.name}
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      resetFile();
                    }}
                    className="ml-2 p-1 rounded-full hover:bg-[var(--color-border)]"
                  >
                    <X
                      className="text-[var(--color-text)] cursor-pointer"
                      size={20}
                    />
                  </button>
                </div>

                <button
                  onClick={handleSubmit}
                  disabled={mutation.isLoading}
                  className={`flex items-center gap-2 px-6 py-3 cursor-pointer text-white rounded-lg font-medium transition-colors
                    ${
                      mutation.isLoading
                        ? "bg-[var(--color-grey)] cursor-not-allowed"
                        : "bg-[var(--color-primary)] "
                    }
                  `}
                >
                  {mutation.isLoading ? (
                    <>
                      <Loader2 className="animate-spin" size={20} />
                      Загрузка...
                    </>
                  ) : (
                    <>
                      <Upload size={20} />
                      Загрузить расписание
                    </>
                  )}
                </button>
              </div>
            ) : (
              <>
                <div className="bg-[var(--color-accent)] rounded-full p-4 mb-4">
                  <Upload className="text-[var(--color-primary)]" size={36} />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-[var(--color-main-text)]">
                  Перетащите файл сюда
                </h3>
                <p className="mb-4 text-[var(--color-text)]">
                  или{" "}
                  <span className="text-[var(--color-primary)] font-medium">
                    выберите файл
                  </span>{" "}
                  на компьютере
                </p>
                <p className="text-sm text-[var(--color-grey)]">
                  Поддерживаемые форматы: .xls, .xlsx (макс. 5MB)
                </p>
              </>
            )}
          </div>
        </div>

        {/* Сообщения об ошибках и статусе */}
        <div className="w-full max-w-2xl mt-4">
          {error && (
            <div className="flex items-center p-3 rounded-lg bg-[var(--color-error)] text-[var(--color-error-text)]">
              <X className="mr-2" size={20} />
              {error}
            </div>
          )}

          {mutation.isError && (
            <div className="flex items-center p-3 rounded-lg bg-[var(--color-error)] text-[var(--color-error-text)]">
              <X className="mr-2" size={20} />
              Ошибка:{" "}
              {mutation.error instanceof Error
                ? mutation.error.message
                : "Неизвестная ошибка"}
            </div>
          )}

          {mutation.isSuccess && (
            <div className="flex items-center p-3 rounded-lg bg-green-100 text-green-700">
              <Check className="mr-2" size={20} />
              Расписание успешно загружено!
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
