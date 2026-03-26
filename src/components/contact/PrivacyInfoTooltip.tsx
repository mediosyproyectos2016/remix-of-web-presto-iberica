import { useState } from "react";
import { Info } from "lucide-react";

export const PrivacyInfoTooltip = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <span className="relative inline-block">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
        className="inline-flex items-center gap-1 text-accent hover:underline transition-colors cursor-pointer"
      >
        Información básica sobre protección de datos
        <Info className="w-3.5 h-3.5" />
      </button>
      {isOpen && (
        <div className="absolute bottom-full left-0 mb-2 w-[360px] md:w-[480px] bg-background border border-border shadow-lg p-4 z-50 text-xs">
          <h4 className="font-display text-sm mb-3 uppercase tracking-wider">Información básica sobre protección de datos</h4>
          <table className="w-full border-collapse">
            <tbody>
              <tr className="border-b border-border">
                <td className="py-2 pr-3 font-medium text-foreground align-top w-28">Responsable</td>
                <td className="py-2 text-muted-foreground">PRESTO IBÉRICA, S.A.</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-3 font-medium text-foreground align-top">Finalidad</td>
                <td className="py-2 text-muted-foreground">Responder a las solicitudes de los usuarios.</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-3 font-medium text-foreground align-top">Legitimación</td>
                <td className="py-2 text-muted-foreground">Aplicación de medidas precontractuales.</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-3 font-medium text-foreground align-top">Destinatarios</td>
                <td className="py-2 text-muted-foreground">No se cederán datos a terceros, salvo obligación legal.</td>
              </tr>
              <tr className="border-b border-border">
                <td className="py-2 pr-3 font-medium text-foreground align-top">Derechos</td>
                <td className="py-2 text-muted-foreground">Acceder, rectificar y suprimir datos, así como otros derechos, como se explica en la información adicional.</td>
              </tr>
              <tr>
                <td className="py-2 pr-3 font-medium text-foreground align-top">Info. adicional</td>
                <td className="py-2 text-muted-foreground">
                  Puede consultar la información adicional y detallada sobre protección de datos en la{" "}
                  <a href="/privacidad" className="text-accent hover:underline">política de privacidad</a>.
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </span>
  );
};
