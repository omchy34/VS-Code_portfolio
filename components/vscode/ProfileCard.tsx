export default function ProfileCard() {
  return (
    <div className="flex justify-center p-5 border-t border-white/10">
      <div className="w-35 h-35 rounded-full overflow-hidden bg-gray-700 shrink-0">
        <img
          src="/profile.png"
          alt=""
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
}