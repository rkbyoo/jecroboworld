import { useEffect, useState } from 'react';
import { ExternalLink, Youtube, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface Tutorial {
  id: number;
  topic: string;
  description: string;
  readMoreLink: string;
}

interface Channel {
  id: number;
  channelName: string;
  ownerName: string;
  embedLink: string;
  channelLink: string;
}

interface Software {
  name: string;
  description: string;
}

interface SoftwareData {
  design: Software[];
  simulation: Software[];
  advanced: Software[];
}

const TutorialsPage = () => {
  const [tutorials, setTutorials] = useState<Tutorial[]>([]);
  const [channels, setChannels] = useState<Channel[]>([]);
  const [softwares, setSoftwares] = useState<SoftwareData | null>(null);

  useEffect(() => {
    Promise.all([
      import('@/data/tutorials.json'),
      import('@/data/channels.json'),
      import('@/data/softwares.json')
    ]).then(([tutorialsModule, channelsModule, softwaresModule]) => {
      setTutorials(tutorialsModule.default);
      setChannels(channelsModule.default);
      setSoftwares(softwaresModule.default);
    });
  }, []);

  return (
    <div className="pt-24 min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4">
            Tutorials & Resources
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Learn robotics through comprehensive tutorials, videos, and software tools
          </p>
        </div>

        {/* Blog-style Tutorials */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-foreground mb-8">Learning Tutorials</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tutorials.map((tutorial) => (
              <div
                key={tutorial.id}
                className="group bg-card border border-border rounded-xl p-6 hover-glow transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-black mb-3 group-hover:text-black transition-colors">
                  {tutorial.topic}
                </h3>
                <p className="text-black/60 group-hover:text-black/80 mb-4 leading-relaxed transition-colors">
                  {tutorial.description}
                </p>
                <div className="flex justify-start">
                  <Button asChild variant="outline" className="group-hover:scale-105 transition-all duration-300 hover:bg-black hover:text-white hover:border-black">
                    <a
                      href={tutorial.readMoreLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center cursor-pointer text-black hover:bg-black/90 transition-all duration-300"
                    >
                      Read More
                      <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1 duration-300" />
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* YouTube Tutorials */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-foreground mb-8">Video Tutorials</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {channels.map((channel) => (
              <div
                key={channel.id}
                className="bg-card border border-border rounded-xl overflow-hidden hover-glow transition-all duration-300"
              >
                <div className="aspect-video">
                  <iframe
                    src={channel.embedLink}
                    title={channel.channelName}
                    className="w-full h-full"
                    allowFullScreen
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-black mb-1">
                        {channel.channelName}
                      </h3>
                      <p className="text-black/60">by {channel.ownerName}</p>
                    </div>
                    <Youtube className="h-6 w-6 text-red-500" />
                  </div>
                  <div className="flex justify-start">
                    <Button asChild className="hover:scale-105 transition-transform duration-300 bg-black text-white hover:bg-gray-800 hover:text-white">
                      <a
                        href={channel.channelLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center cursor-pointer"
                      >
                        <ExternalLink className="mr-2 h-4 w-4 transition-transform hover:translate-x-1 duration-300" />
                        Go to Channel
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Software List */}
        {softwares && (
          <section>
            <h2 className="text-3xl font-bold text-foreground mb-8">Robotics Software</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {Object.entries(softwares).map(([category, softwareList]) => (
                <div
                  key={category}
                  className="bg-card border border-border rounded-xl p-6 hover-glow transition-all duration-300"
                >
                  <h3 className="text-xl font-bold text-black mb-4 capitalize">
                    {category}
                  </h3>
                  <div className="space-y-4">
                    {softwareList.map((software, index) => (
                      <div key={index} className="border-b border-border/50 pb-3 last:border-b-0">
                        <h4 className="font-semibold text-black mb-1">
                          {software.name}
                        </h4>
                        <p className="text-sm text-black/60">
                          {software.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default TutorialsPage;