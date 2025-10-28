import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface Editor {
  name: string;
  role?: string;
}

export function EditorialBoard() {
  const editors: Editor[] = [
    { name: "Nazimjon ASKAROV", role: "Bosh muharriri" },
    { name: "Alisher SHUKUROV", role: "Tahrir hay'ati" },
    { name: "Akmal QOSIMOV", role: "Tahrir hay'ati" },
    { name: "Shoxrux AKRAMOV", role: "Tahrir hay'ati" },
    { name: "Sandasror GULOMOV", role: "Tahrir hay'ati" },
    { name: "Norqul XUSHMATOV", role: "Tahrir hay'ati" },
    { name: "Rajabboy JALOLIDDINOV", role: "Tahrir hay'ati" },
    { name: "Tulkin FARMONOV", role: "Tahrir hay'ati" },
    { name: "Fotima NAZAROVA", role: "Tahrir hay'ati" },
    { name: "Iroda RUSTAMOVA", role: "Tahrir hay'ati" },
    { name: "Hinarjon ALIYEV", role: "Tahrir hay'ati" },
    { name: "Abduzolik MUXTOROV", role: "Tahrir hay'ati" },
    { name: "Muradjon KOSIMOV", role: "Tahrir hay'ati" },
    { name: "Isroiljon XOLMIRZAYEV", role: "Tahrir hay'ati" },
    { name: "Asliddin ABDULLAYEV", role: "Tahrir hay'ati" },
    { name: "Tilxom OCHILOV", role: "Tahrir hay'ati" },
    { name: "Akmal NOROV", role: "Tahrir hay'ati" },
    { name: "Baxtiyar MENGLIYULOV", role: "Tahrir hay'ati" },
    { name: "Zebo SHOXUJAEVA", role: "Tahrir hay'ati" },
    { name: "Ziboxan SEYITIMBETOVA", role: "Tahrir hay'ati" },
    { name: "Ulug'bek SADULLAYEV", role: "Tahrir hay'ati" },
    { name: "Dilshod YAQUBOV", role: "Tahrir hay'ati" },
    { name: "Abdurauf OBOOQULOV", role: "Tahrir hay'ati" },
    { name: "Nodir JANIYBEKOV", role: "Tahrir hay'ati" }
  ];

  const chiefEditor = editors.find(e => e.role === "Bosh muharriri");
  const boardMembers = editors.filter(e => e.role !== "Bosh muharriri");

  return (
    <section id="hayat" className="py-16 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
              Tahrir hay'ati
            </h2>
            <div className="h-1 w-24 bg-primary mx-auto rounded-full" />
          </div>

          <div className="grid gap-8">
            {/* Bosh muharriri */}
            {chiefEditor && (
              <Card className="border-2 border-primary/20 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader className="bg-gradient-to-r from-primary/10 to-primary/5">
                  <CardTitle className="text-2xl text-center text-primary">
                    Bosh muharriri
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-6">
                  <p className="text-xl font-semibold text-center">
                    {chiefEditor.name}
                  </p>
                </CardContent>
              </Card>
            )}

            {/* Tahrir hay'ati a'zolari */}
            <Card className="shadow-lg">
              <CardHeader className="bg-gradient-to-r from-muted/50 to-muted/30">
                <CardTitle className="text-2xl text-center">
                  Tahrir hay'ati
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {boardMembers.map((editor, index) => (
                    <div
                      key={index}
                      className="p-4 rounded-lg border border-border hover:border-primary/50 hover:bg-muted/30 transition-all duration-200 group"
                    >
                      <p className="font-medium text-center group-hover:text-primary transition-colors">
                        {editor.name}
                      </p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}