import { priceList } from "@/lib/content";

export default function PriceTable({ withNotes = true }: { withNotes?: boolean }) {
  return (
    <div>
      <table className="w-full border-collapse text-left">
        <caption className="sr-only">
          Priser for leie av lokaler på Myraunet Gård
        </caption>
        <thead>
          <tr className="border-b border-foreground/20">
            <th className="py-3 text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
              Lokale og tillegg
            </th>
            <th className="py-3 text-right text-[11px] font-medium uppercase tracking-[0.16em] text-muted-foreground">
              Pris
            </th>
          </tr>
        </thead>
        <tbody>
          {priceList.rows.map((row) => (
            <tr key={row.label} className="border-b border-border">
              <td className="py-4 pr-4 text-sm text-foreground md:text-base">
                {row.label}
              </td>
              <td className="py-4 text-right font-serif text-lg text-foreground md:text-xl">
                {row.value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {withNotes && (
        <ul className="mt-7 space-y-2 text-sm leading-relaxed text-muted-foreground">
          {priceList.notes.map((note) => (
            <li key={note}>{note}</li>
          ))}
          <li>Prisene gjelder fra {priceList.updated}.</li>
        </ul>
      )}
    </div>
  );
}
