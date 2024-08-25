import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component"
import 'react-vertical-timeline-component/style.min.css';
import timelineElements from "../timelineElements";
import { ClipboardPlus, Lightbulb, Network, Rocket, SchoolIcon, WorkflowIcon } from "lucide-react";

const Timeline = () => {
    let workIconStyles = { background: "#06D6A0" };
    let schoolIconStyles = { background: "#f9c74f" };


    // <Network/>
    // <ClipboardPlus/>

    return (
        <div>
            <div className="py-20">
                <div className="container mx-auto px-6 md:px-12 xl:px-32">
                    <div className="mb-16 text-center">
                        <h2 className="mb-4 text-center text-4xl text-grayText font-bold md:text-5xl">History & Milestones</h2>
                        <p className="text-grayText/70 lg:w-8/12 lg:mx-auto">Since our inception, PlayTimeHub has been on a mission to revolutionize the way people book sports facilities. Here is a brief look at our journey:</p>
                    </div>
                    <div className="flex justify-center items-center">
                        <VerticalTimeline>
                            {timelineElements.map((element) => {
                                let isIdeaIcon = element.icon === "idea";
                                let isLaunchIcon = element.icon === "launch";
                                let isNetworkIcon = element.icon === "network";
                                let isFeaturesIcon = element.icon === "features";
                                let showButton =
                                    element.buttonText !== undefined &&
                                    element.buttonText !== null &&
                                    element.buttonText !== "";

                                return (
                                    <VerticalTimelineElement
                                        key={element.key}
                                        date={element.date}
                                        dateClassName="date"
                                        contentStyle={{ background: '#564f6f', color: '#fff' }}
                                        className=""
                                        iconStyle={isIdeaIcon ? workIconStyles : schoolIconStyles}
                                        icon={isIdeaIcon === 'idea' ? <Lightbulb /> : <Rocket />}
                                    >
                                        <h3 className="vertical-timeline-element-title">
                                            {element.title}
                                        </h3>
                                        {/* <h5 className="vertical-timeline-element-subtitle">
                                            {element.location}
                                        </h5>
                                        <p id="description">{element.description}</p>
                                        {showButton && (
                                            <a
                                                className={`button ${isWorkIcon ? "workButton" : "schoolButton"
                                                    }`}
                                                href="/"
                                            >
                                                {element.buttonText}
                                            </a>
                                        )} */}
                                    </VerticalTimelineElement>
                                );
                            })}
                        </VerticalTimeline>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Timeline