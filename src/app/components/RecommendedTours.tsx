import { RecommendedTour } from "./RecommendedTour";

export const RecommendedTours = (props: any) => {
  console.log(props);
  return (
    <section className="py-16 container mx-auto w-full px-4">
      <h2 className="text-3xl md:text-4xl font-bold text-center">{props.blok.headline}</h2>
      <div className="grid md:grid-cols-2 gap-8 mt-16">
        {props.blok.tours.map((tour: any) => (
          <RecommendedTour key={tour.content._uid} story={tour} />
        ))}
      </div>

    </section>
  )
}