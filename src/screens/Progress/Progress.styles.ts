import tailwind from '@utils/tailwind';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  header: tailwind('mt-3 mb-9'),
  headSection: tailwind('pt-4 pb-4'),
  backText: tailwind('text-gray-light'),
  spaceBetween: tailwind(
    'flex flex-row justify-between content-center items-center'
  ),
  titleText: tailwind('text-off-white font-martian-600 ml-2'),
  leaderboard: tailwind('flex flex-row'),
  leaderboardBadge: tailwind(
    'bg-charcoal-medium rounded-md pl-3 pr-7 py-1 relative left-4'
  ),
  leaderboardText: tailwind('text-white font-martian-500'),
  headerButton: tailwind('rounded-md flex content-center items-center'),
  league: tailwind('text-bright-green font-martian-400'),
  points: tailwind('flex flex-row content-center'),
  buttonText: {
    color: '#FFFFFF',
    marginLeft: 20
  },
  buttonIcon: {
    width: 12,
    height: 12
  },
  vr: tailwind('h-12 border-gray-medium border-l mx-3.5'),
  coinButton: tailwind('bg-purple-light'),
  coinButton2: tailwind('mr-2.5'),
  rubyButton: tailwind('bg-purple'),
  avatarContainer: tailwind('flex flex-row content-center mb-5'),
  mainTitle: tailwind('mb-4 text-off-white font-martian-500'),
  viewTitle: tailwind('mb-4 text-gray-medium font-martian-400'),
  activitySection: tailwind('mb-12'),
  mainInfo: tailwind('text-off-white mb-1.5 font-martian-700'),
  secondaryInfo: tailwind('text-gray-medium font-martian-400'),
  scoreSection: tailwind('items-center'),
  mainScore: tailwind('text-off-white'),
  secondaryScore: tailwind('text-charcoal-light font-martian-400'),
  medalSection: tailwind('mb-5'),
  avatarPic: tailwind('mr-4')
});

export default styles;
