import React from "react";
import type { CalendarBlock } from "./types";

export const Calendar: React.FC<CalendarBlock> = ({
  title,
  description,
  events,
}) => {
  // Sort events by date
  const sortedEvents = [...events].sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );

  const getEventTypeStyle = (type: string | null | undefined) => {
    switch (type) {
      case "academic":
        return "bg-blue-100 text-blue-800 border-blue-300";
      case "event":
        return "bg-purple-100 text-purple-800 border-purple-300";
      case "holiday":
        return "bg-green-100 text-green-800 border-green-300";
      default:
        return "bg-gray-100 text-gray-800 border-gray-300";
    }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("fr-FR", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(date);
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {title && (
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-4">
            {title}
          </h2>
        )}
        {description && (
          <p className="text-xl text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            {description}
          </p>
        )}

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {sortedEvents.map((event, index) => (
            <div
              key={index}
              className={`rounded-lg border p-6 ${getEventTypeStyle(event.type)}`}
            >
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="font-semibold text-lg mb-2">{event.title}</h3>
                  <p className="text-sm mb-2">
                    {formatDate(event.date)}
                    {event.endDate && ` - ${formatDate(event.endDate)}`}
                  </p>
                  {event.location && (
                    <p className="text-sm mb-2">
                      <span className="font-medium">Lieu:</span>{" "}
                      {event.location}
                    </p>
                  )}
                </div>
                {event.type && (
                  <span
                    className={`text-xs px-2 py-1 rounded-full capitalize ${
                      event.type === "academic"
                        ? "bg-blue-200"
                        : event.type === "event"
                          ? "bg-purple-200"
                          : "bg-green-200"
                    }`}
                  >
                    {event.type}
                  </span>
                )}
              </div>
              {event.description && (
                <p className="mt-4 text-sm">{event.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
