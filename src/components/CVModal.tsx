import { useState } from "react";
import Modal from "./Modal";
import { FileText, Download } from "lucide-react";

const CVModal = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold transition-all hover:shadow-[0_0_30px_hsl(217,91%,60%/0.4)] hover:scale-105"
      >
        <FileText className="w-4 h-4" />
        View CV
      </button>

      <Modal isOpen={open} onClose={() => setOpen(false)} title="Curriculum Vitae">
        <div className="flex flex-col gap-4">
          <div className="w-full h-[60vh] rounded-xl overflow-hidden border border-border bg-secondary">
            <iframe
              src="/CV.pdf"
              className="w-full h-full"
              title="CV Preview"
            />
          </div>
          <a
            href="/CV.pdf"
            download
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-semibold transition-all hover:shadow-[0_0_30px_hsl(217,91%,60%/0.4)] hover:scale-105 self-center"
          >
            <Download className="w-4 h-4" />
            Download CV
          </a>
        </div>
      </Modal>
    </>
  );
};

export default CVModal;
