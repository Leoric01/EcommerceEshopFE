import Divider from '@mui/material/Divider'

const ProfileFieldCard = ({ keys, value }: { keys: string; value: string }) => {
  return (
    <div className='p-5 flex items-center bg-slate-200'>
      <p className='flex-[2] pr-5'>{keys}</p> {/* Left column */}
      <Divider orientation='vertical' flexItem />
      <p className='flex-[3] pl-4 lg:pl-7 font-semibold lg:text-lg text-secondary'>{value}</p> {/* Right column */}
    </div>
  );
};

export default ProfileFieldCard;