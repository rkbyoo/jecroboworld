interface MemorialCardProps {
    name: string;
    image: string;
    batch: string;
    position: string;
    message: string;
}

const MemorialCard = ({ name, image, batch, position, message }: MemorialCardProps) => {
    return (
        <div className="col-span-full mb-12">
            <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 via-gray-800 to-black border-2 border-gray-600/30 shadow-2xl">
                <div className="p-8">
                    <div className="flex flex-col md:flex-row gap-8">
                        {/* Square Image Section - Left Side */}
                        <div className="flex-shrink-0">
                            <div className="relative">
                                <div className="w-48 h-48 rounded-2xl overflow-hidden border-4 border-amber-400/50 shadow-xl">
                                    <img
                                        src={image}
                                        alt={name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                {/* Halo effect */}
                                <div className="absolute -inset-2 rounded-2xl bg-gradient-to-r from-amber-400/20 via-yellow-300/20 to-amber-400/20 blur-md -z-10"></div>
                            </div>
                        </div>

                        {/* Content Section - Right Side */}
                        <div className="flex-1 flex flex-col justify-center">
                            <div className="mb-6">
                                <h2 className="text-3xl lg:text-4xl font-bold text-white mb-3">
                                    {name}
                                </h2>
                                <div className="flex items-center space-x-4 text-amber-200 mb-6">
                                    <span className="text-lg font-medium">{batch}</span>
                                    <span className="w-1 h-1 bg-amber-200 rounded-full"></span>
                                    <span className="text-sm">{position}</span>
                                </div>
                            </div>

                            {/* Memorial Message */}
                            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 mb-6">
                                <p className="text-gray-200 leading-relaxed text-base">
                                    {message}
                                </p>
                            </div>

                            {/* Quote */}
                            <div>
                                <p className="text-amber-200/80 italic text-lg font-medium mb-2">
                                    "We'll remember you, always"
                                </p>
                                <p className="text-gray-400 text-sm">
                                    Forever in our hearts and memories
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MemorialCard;