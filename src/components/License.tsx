import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { useLanguage } from "./LanguageProvider";
import { ArrowLeft } from "lucide-react";

export function License() {
  const { language } = useLanguage();

  const t = {
    title: { en: "License", es: "Licencia" },
    subtitle: { en: "MIT License", es: "Licencia MIT" },
    back: { en: "Back to Home", es: "Volver al inicio" },
  };

  const license = `MIT License

Copyright (c) 2014 Spencer Lyon

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`;

  return (
    <section className="min-h-screen bg-gray-900 dark:bg-black text-gray-300 dark:text-gray-400 py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="mb-8">
            <Button
              variant="ghost"
              size="sm"
              className="text-gray-400 hover:text-white hover:bg-gray-800"
              onClick={() => window.location.hash = "#home"}
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              {t.back[language]}
            </Button>
          </div>

          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl text-white mb-4">{t.title[language]}</h1>
            <p className="text-xl text-muted-foreground">{t.subtitle[language]}</p>
          </div>

          <Card className="bg-gray-800/50 dark:bg-gray-900/50 border-gray-700">
            <CardContent className="p-6 sm:p-8">
              <pre className="whitespace-pre-wrap font-mono text-sm leading-relaxed text-gray-300">
                {license}
              </pre>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
