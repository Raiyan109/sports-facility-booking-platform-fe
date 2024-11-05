import { Radar, RadarChart, PolarGrid, Legend, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';

const data = [
    {
        subject: 'Math',
        A: 120,
        B: 110,
        fullMark: 150,
    },
    {
        subject: 'Chinese',
        A: 98,
        B: 130,
        fullMark: 150,
    },
    {
        subject: 'English',
        A: 86,
        B: 130,
        fullMark: 150,
    },
    {
        subject: 'Geography',
        A: 99,
        B: 100,
        fullMark: 150,
    },
    {
        subject: 'Physics',
        A: 85,
        B: 90,
        fullMark: 150,
    },
    {
        subject: 'History',
        A: 65,
        B: 85,
        fullMark: 150,
    },
];
const RadarAverageRating = ({ averageRatings }) => {
    const ratingNames = averageRatings?.data?.map((r) => r.name)
    console.log(averageRatings?.data);

    return (

        <ResponsiveContainer width="95%" height={300}>
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={averageRatings?.data}>
                <PolarGrid />
                <PolarAngleAxis dataKey='name' />
                <PolarRadiusAxis angle={30} domain={[0, 5]} />
                <Radar name="averageRating" dataKey="averageRating" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                {/* <Radar name="Lily" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} /> */}
                <Legend />
            </RadarChart>
        </ResponsiveContainer>

    )
}

export default RadarAverageRating