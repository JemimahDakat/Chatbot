import React from "react"
import { GetStaticProps } from "next"
import Layout from "../components/Layout"
import Event, { EventProps } from "../components/Event"
import prisma from '../lib/prisma'

export const getStaticProps: GetStaticProps = async () => {
  const feed = await prisma.event.findMany();
  return { 
    props: { feed }, 
    revalidate: 10 
  }
}

type Props = {
  feed: EventProps[]
}

const Bloger: React.FC<Props> = (props) => {
  return (
    <Layout>
      <div className="page">
        <h1>Public Feed</h1>
        <main>
          {props.feed.map((event) => (
            <div key={event.id} className="post">
              <Event event={event} />
            </div>
          ))}
        </main>
      </div>
      <style jsx>{`
        .post {
          background: white;
          transition: box-shadow 0.1s ease-in;
        }

        .post:hover {
          box-shadow: 1px 1px 3px #aaa;
        }

        .post + .post {
          margin-top: 2rem;
        }
      `}</style>
    </Layout>
  )
}

export default Bloger
