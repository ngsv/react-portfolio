import foodApp from '../assets/images/food-ordering.png';
import scheduler from '../assets/images/scheduler.png';
import tweeter from '../assets/images/tweeter.png';
import tinyapp from '../assets/images/tinyapp.png';

const projects = [
  {
    id: 1,
    img: foodApp,
    title: 'Food Ordering App',
    description:
      'A food ordering experience for a restaurant specializing Thai Cuisine.',
    technologies: ['HTML', 'Bootstrap', 'PostgreSQL'],
  },
  {
    id: 2,
    img: scheduler,
    title: 'Interview Scheduler',
    description:
      'An interview scheduling app that allows users to book, edit, and delete appointments for a given week.',
    technologies: ['React', 'PostgreSQL'],
  },
  {
    id: 3,
    img: tweeter,
    title: 'Tweeter',
    description: 'A single-page Twitter clone.',
    technologies: ['HTML', 'Bootstrap', 'AJAX', 'jQuery'],
  },
  {
    id: 4,
    img: tinyapp,
    title: 'TinyApp',
    description:
      'A URL shortening app that allows users to create, edit, and delete URLs. Shortened URLs can be used by anyone.',
    technologies: ['HTML', 'CSS', 'JavaScript'],
  },
];

export default projects;
