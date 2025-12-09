export default function YouTubeEmbed({id}:{id:string}){
  return (
    <div className="relative w-full" style={{aspectRatio:"16/9"}}>
      <iframe
        className="absolute inset-0 w-full h-full rounded-xl"
        src={`https://www.youtube.com/embed/${id}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  )
}
