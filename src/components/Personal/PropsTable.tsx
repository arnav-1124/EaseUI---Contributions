interface PropsTableProps {
  data: {
    prop: string;
    type: string;
    default: string;
    description: string;
  }[];
}

const PropsTable = ({ data }: PropsTableProps) => {
  return (
    <div className="overflow-hidden rounded-lg border border-border shadow-sm">
      <table className="w-full">
        <thead>
          <tr>
            <th className="px-4 py-3 text-left text-sm font-semibold">Prop</th>
            <th className="px-4 py-3 text-left text-sm font-semibold">Type</th>
            <th className="px-4 py-3 text-left text-sm font-semibold">
              Default
            </th>
            <th className="px-4 py-3 text-left text-sm font-semibold">
              Description
            </th>
          </tr>
        </thead>

        <tbody className="divide-y divide-border">
          {data.map((row, i) => (
            <tr key={i} className="hover:bg-muted transition-colors">
              <td className="px-4 py-3 text-sm font-mono text-primary">
                {row.prop}
              </td>

              <td className="px-4 py-3 text-sm font-mono text-muted-foreground">
                {row.type}
              </td>

              <td className="px-4 py-3 text-sm font-mono text-muted-foreground">
                {row.default}
              </td>

              <td className="px-4 py-3 text-sm text-foreground">
                {row.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PropsTable;
