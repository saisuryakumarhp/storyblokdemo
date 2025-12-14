import { storyblokEditable } from "@storyblok/react";

export const Testimonial = (props: any) => {
  return (
    <div {...storyblokEditable(props.blok)} className="bg-white p-8 rounded-sm shadow">
      <p className="text-xl leading-relaxed text-gray-500">{props.blok.comment}</p>
      <p className="text-lg font-semibold mt-6">{props.blok.name}</p>
    </div>
  )
}