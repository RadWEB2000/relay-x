function chunk<T>(arr: T[], size: number): T[][] {
    if (size <= 0) return [arr];
    const out: T[][] = [];
    for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size));
    return out;
}

export default function Table({ body, caption, foot, head, cols }: TableBlock) {
    const columnCount = cols || head?.length || foot?.length || 0;
    console.log(`cols`, cols)
    const rows = chunk(body ?? [], Math.max(columnCount, 1));

    const padRow = (cells: string[]): string[] =>
        cells.length >= columnCount ? cells : [...cells, ...Array(columnCount - cells.length).fill("")];

    return (
        <table className="w-full text-lg border-separate [border-spacing:0.4rem]">
            {caption ? <caption className="text-left mb-2 text-gray-500">{caption}</caption> : null}

            {head?.length ? (
                <thead>
                    <tr>
                        {padRow(head).map((h, i) => (
                            <th
                                key={i}
                                className={[
                                    "px-3 py-2 text-left font-bold ",
                                    i === 0 ? "rounded-l-md" : "",
                                    i === columnCount - 1 ? "rounded-r-md" : "",
                                ].join(" ")}
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
                        <tr key={rIdx}>
                            {cells.map((c, cIdx) => (
                                <td
                                    key={cIdx}
                                    className={[
                                        "px-3 py-2 bg-white rounded-md"
                                    ].join(" ")}
                                >
                                    {c}
                                </td>
                            ))}
                        </tr>
                    );
                })}
            </tbody>

            {foot?.length ? (
                <tfoot>
                    <tr>
                        {padRow(foot).map((f, i) => (
                            <td
                                key={i}
                                className={[
                                    "px-3 py-2 font-bold bg-flamingo-200",
                                    i === 0 ? "rounded-l-md" : "",
                                    i === columnCount - 1 ? "rounded-r-md" : "",
                                ].join(" ")}
                            >
                                {f}
                            </td>
                        ))}
                    </tr>
                </tfoot>
            ) : null}
        </table>
    );
}