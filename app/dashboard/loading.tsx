export default function Loading() {
  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3].map(i => (
          <div
            key={i}
            className="h-24 animate-pulse rounded-lg bg-gray-200"
          />
        ))}
      </div>

      <div className="h-40 animate-pulse rounded-lg bg-gray-200" />
    </div>
  );
}
