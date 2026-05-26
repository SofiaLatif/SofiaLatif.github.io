interface TimelineEvent {
  title: string;
  description: string;
  details?: React.ReactNode;
}

interface TimelineProps {
  events: TimelineEvent[];
}

export default function Timeline({ events }: TimelineProps) {
  return (
    <div className="relative border-l border-emerald-200 dark:border-emerald-900 ml-4 py-8">
      {events.map((event, index) => (
        <div key={index} className="mb-10 ml-6 group">
          <span className="absolute flex items-center justify-center w-8 h-8 bg-emerald-100 dark:bg-emerald-900 rounded-full -left-4 ring-4 ring-white dark:ring-black group-hover:bg-emerald-200 dark:group-hover:bg-emerald-800 transition-colors">
            <span className="text-emerald-700 dark:text-emerald-300 font-bold text-sm">{index + 1}</span>
          </span>
          <h3 className="flex items-center mb-1 text-lg font-semibold text-gray-900 dark:text-zinc-50">
            {event.title}
          </h3>
          <p className="mb-4 text-base font-normal text-gray-500 dark:text-zinc-400">
            {event.description}
          </p>
          {event.details && (
            <div className="p-4 bg-emerald-50/50 dark:bg-emerald-900/10 rounded-lg border border-emerald-100 dark:border-emerald-900/30">
              {event.details}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
