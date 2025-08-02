function chunk<T>(arr: T[], size: number): T[][] {
    if (size <= 0) return [arr];
    const out: T[][] = [];
    for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
    return out;
}

export default function Table({ body, caption, foot, head }: TableBlock) {
    const columnCount =
        head?.length ?? foot?.length ?? body?.length ?? 0;
    const rows = chunk(body ?? [], Math.max(columnCount, 1));
    const padRow = (cells: string[]): string[] =>
        cells.length >= columnCount
            ? cells
            : [...cells, ...Array(columnCount - cells.length).fill("")];
    return (
        <table className="w-full text-lg overflow-x-auto border-collapse [border-spacing:0]">
            {caption ? (
                <caption className="text-left mb-2 text-gray-500">{caption}</caption>
            ) : null}

            {head?.length ? (
                <thead>
                    <tr className="">
                        {padRow(head).map((h, i) => (
                            <th
                                key={`th-${i}`}
                                scope="col"
                                className="border px-3 py-2 text-left font-bold bg-flamingo-300"
                            >
                                {h}
                            </th>
                        ))}
                    </tr>
                </thead>
            ) : null}

            <tbody>
                {rows.map((r, rIdx) => {
                    const cells = padRow(r);
                    return (
                        <tr key={`tr-${rIdx}`} className={rIdx % 2 ? "bg-flamingo-50/50" : ""}>
                            {cells.map((c, cIdx) => (
                                <td key={`td-${rIdx}-${cIdx}`} className="border px-3 py-2 align-top">
                                    {c}
                                </td>
                            ))}
                        </tr>
                    );
                })}
            </tbody>

            {foot?.length ? (
                <tfoot>
                    <tr className="">
                        {padRow(foot).map((f, i) => (
                            <td key={`tf-${i}`} className="border px-3 py-2 font-bold bg-flamingo-200">
                                {f}
                            </td>
                        ))}
                    </tr>
                </tfoot>
            ) : null}
        </table>
    )
}