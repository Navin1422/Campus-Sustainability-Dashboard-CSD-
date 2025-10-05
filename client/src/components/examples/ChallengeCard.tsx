import ChallengeCard from '../ChallengeCard';

export default function ChallengeCardExample() {
  const mockChallenge = {
    id: "1",
    title: "Zero Waste Week",
    description: "Reduce your waste to zero for 7 consecutive days by recycling and composting.",
    points: 500,
    participants: 142,
    progress: 45,
    daysLeft: 4,
    category: "recycling",
  };

  return <ChallengeCard challenge={mockChallenge} />;
}
