import ProjectContainer from './project-container';

interface MainProps {
    title: string;
}

export default function Main({ title }: MainProps) {
    return (
        <div className='flex items-center justify-center h-screen'>
            <div>
                <h1 className='mb-2'>{title}</h1>
                <ProjectContainer />
            </div>
        </div>
    );
}
