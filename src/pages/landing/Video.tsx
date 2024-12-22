import YoutubeEmbed from "../../components/YoutubeEmbed";

export default function App({
  isPointer,
  embedId,
  title,
  titleStyle,
  subtitle,
  subtitleStyle,
  description,
  textDescription,
}: {
  isPointer?: boolean;
  embedId: string;
  title: string;
  titleStyle?: string;
  subtitle: string;
  subtitleStyle?: string;
  description: string;
  textDescription: string;
}) {
  return (
    <div className="w-full gap-5 flex flex-col p-5">
      <div className="max-w-4xl w-full gap-2 mx-auto flex flex-col items-center justify-center">
        <h1
          className={` w-full ${
            titleStyle ? titleStyle : "text-quanto text-5xl"
          } font-bold`}
        >
          {title}
        </h1>
        <div className="w-full flex ">
          <p
            className={` ${
              subtitleStyle ? subtitleStyle : "text-quantoDark text-3xl"
            } font-semibold mr-3 `}
          >
            {subtitle}
          </p>
          {isPointer && (
            <img src="/image/pointer.svg" alt="banner" className="w-16" />
          )}
        </div>
      </div>
      <YoutubeEmbed embedId={embedId} />
      <div className="w-full flex flex-col items-center justify-center gap-1 mt-3">
        <p className="text-quantoDark text-xl font-bold max-w-3xl w-full">
          {description}
        </p>
        <p className="max-w-3xl w-full text-gray-500">{textDescription}</p>
      </div>
    </div>
  );
}
