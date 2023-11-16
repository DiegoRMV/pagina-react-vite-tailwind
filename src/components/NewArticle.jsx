const NewArticle = ({title, text}) => {
  return (
    <article className="border-GrayishBlue py-10">
        <h2 className="cursor-pointer hover:text-SoftOrange text-[22px] mb-2 font-bold">{title}</h2>
        <p className="text-[16px] leading-relaxed">{text}</p>
    </article>
  )
}

export default NewArticle
