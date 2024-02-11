import React from "react";
import Router from "next/router";
import ReactMarkdown from "react-markdown";

export type EventProps = {
  id: string;
  name: string;
  societies: string[];
};

const Event: React.FC<{ event: EventProps }> = ({ event }) => {
  return (
    <div onClick={() => Router.push("/p/[id]", `/p/${event.id}`)}>
      <h2>{event.name}</h2>
      <small>By {event.societies}</small>
      <style jsx>{`
        div {
          color: inherit;
          padding: 2rem;
        }
      `}</style>
    </div>
  );
};

export default Event;
