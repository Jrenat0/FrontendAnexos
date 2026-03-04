export default function InfoCard({ label, content, color, icon }) {
    return (
        <div className="bg-white h-50 rounded-2xl shadow-md">
            <div className="flex h-full items-center justify-evenly">
                <div className={`flex size-25 items-center justify-center ${color} rounded-full`}>
                    {icon}
                </div>

                <div className="flex flex-col w-6/10 h-full items-start justify-center">
                    <span className="text-xl font-medium">
                        {label}
                    </span>
                    <span className="text-4xl font-medium">{content}</span>
                </div>
            </div>
        </div>
    );
}
