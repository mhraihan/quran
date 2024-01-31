import { Button } from "@/components/ui/button";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import surahData from "@/data/surah.json";
const QuranPage = () => {
  return (
    <div className="grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 grid-cols-2 w-full gap-3">
      {surahData.map((surah) => (
        <Card
          className="group h-24 shadow-none hover:shadow-md transition-shadow cursor-pointer bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#fafafa] to-[#fbfbfb]"
          key={surah.number}
        >
          <CardContent className="p-2 flex flex-col justify-center h-full">
            <CardTitle className="mb-4">
              <Button className="rounded-full text-[8px] bg-muted text-primary group-hover:bg-primary group-hover:text-muted h-5 w-5 p-2">
                {surah.number}
              </Button>
            </CardTitle>
            <p className="font-bold text-xs mb-1">{surah.englishName}</p>
            <p className="font-normal text-gray-400 text-[10px] uppercase">
              {surah.englishNameTranslation}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default QuranPage;
