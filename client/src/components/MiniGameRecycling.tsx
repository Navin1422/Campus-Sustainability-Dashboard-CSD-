import { useState } from "react";
import { Trash2, CheckCircle2, XCircle } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

interface Item {
  id: string;
  name: string;
  correctBin: "recycle" | "compost" | "trash";
}

export default function MiniGameRecycling() {
  const [score, setScore] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const [feedback, setFeedback] = useState<"correct" | "incorrect" | null>(null);
  const [currentItemIndex, setCurrentItemIndex] = useState(0);

  const items: Item[] = [
    { id: "1", name: "Plastic Bottle", correctBin: "recycle" },
    { id: "2", name: "Banana Peel", correctBin: "compost" },
    { id: "3", name: "Chip Bag", correctBin: "trash" },
    { id: "4", name: "Cardboard Box", correctBin: "recycle" },
    { id: "5", name: "Coffee Grounds", correctBin: "compost" },
    { id: "6", name: "Glass Jar", correctBin: "recycle" },
  ];

  const currentItem = items[currentItemIndex];
  const progress = ((currentItemIndex + 1) / items.length) * 100;

  const handleBinClick = (bin: "recycle" | "compost" | "trash") => {
    const isCorrect = bin === currentItem.correctBin;
    setFeedback(isCorrect ? "correct" : "incorrect");
    setAttempts(attempts + 1);

    if (isCorrect) {
      setScore(score + 50);
      setTimeout(() => {
        if (currentItemIndex < items.length - 1) {
          setCurrentItemIndex(currentItemIndex + 1);
          setFeedback(null);
        } else {
          console.log("Game completed! Final score:", score + 50);
        }
      }, 1000);
    } else {
      setTimeout(() => setFeedback(null), 1000);
    }
  };

  const resetGame = () => {
    setScore(0);
    setAttempts(0);
    setCurrentItemIndex(0);
    setFeedback(null);
  };

  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between gap-2 space-y-0 pb-4">
        <CardTitle className="text-2xl font-display font-bold">Recycling Sorter</CardTitle>
        <div className="flex items-center gap-2">
          <Badge variant="secondary" className="font-mono" data-testid="badge-score">
            Score: {score}
          </Badge>
          <Button variant="outline" size="sm" onClick={resetGame} data-testid="button-reset-game">
            Reset
          </Button>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <div className="flex justify-between text-sm">
            <span className="text-muted-foreground">Progress</span>
            <span className="font-medium">{currentItemIndex + 1} / {items.length}</span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>

        {currentItemIndex < items.length ? (
          <>
            <div className="text-center py-8">
              <div className="text-6xl mb-4">🗑️</div>
              <h3 className="text-2xl font-display font-bold mb-2" data-testid="text-current-item">
                {currentItem.name}
              </h3>
              <p className="text-muted-foreground">Where does this belong?</p>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <Button
                variant="outline"
                className="h-24 flex flex-col gap-2 hover-elevate"
                onClick={() => handleBinClick("recycle")}
                disabled={feedback !== null}
                data-testid="button-bin-recycle"
              >
                <div className="text-3xl">♻️</div>
                <span className="text-sm font-medium">Recycle</span>
              </Button>
              <Button
                variant="outline"
                className="h-24 flex flex-col gap-2 hover-elevate"
                onClick={() => handleBinClick("compost")}
                disabled={feedback !== null}
                data-testid="button-bin-compost"
              >
                <div className="text-3xl">🌱</div>
                <span className="text-sm font-medium">Compost</span>
              </Button>
              <Button
                variant="outline"
                className="h-24 flex flex-col gap-2 hover-elevate"
                onClick={() => handleBinClick("trash")}
                disabled={feedback !== null}
                data-testid="button-bin-trash"
              >
                <div className="text-3xl">🗑️</div>
                <span className="text-sm font-medium">Trash</span>
              </Button>
            </div>

            {feedback && (
              <div
                className={`flex items-center justify-center gap-2 p-4 rounded-lg ${
                  feedback === "correct"
                    ? "bg-primary/10 text-primary"
                    : "bg-destructive/10 text-destructive"
                }`}
                data-testid="feedback-message"
              >
                {feedback === "correct" ? (
                  <>
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="font-semibold">Correct! +50 points</span>
                  </>
                ) : (
                  <>
                    <XCircle className="w-5 h-5" />
                    <span className="font-semibold">Try again!</span>
                  </>
                )}
              </div>
            )}
          </>
        ) : (
          <div className="text-center py-8 space-y-4">
            <div className="text-6xl mb-4">🎉</div>
            <h3 className="text-2xl font-display font-bold">Game Complete!</h3>
            <p className="text-muted-foreground">
              Final Score: <span className="font-mono font-bold text-primary text-xl">{score}</span>
            </p>
            <Button onClick={resetGame} data-testid="button-play-again">
              Play Again
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
