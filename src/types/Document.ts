export type Document = {
  id: string;
  title: string;
  issuer: string;
  date: string;
  logo?: string;
  url?: string;
};

export const documents: Document[] = [
  {
    id: 'cv',
    title: 'Curriculum Vitae',
    issuer: 'Victor Shammah',
    date: '2024',
    logo: 'https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    url: 'https://drive.google.com/file/d/1qTBG04nGjSp1hI5PRaR0KC0g2MjtIPE1/view?usp=sharing'
  },
  {
    id: 'cissp',
    title: 'Certified Information Systems Security Professional (CISSP)',
    issuer: 'Simply Learn',
    date: 'Feb 2024',
    logo: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    url: 'https://drive.google.com/file/d/16JlI6lRqnhFRRKqgOmdqUkMS0pjOKnVT/view?usp=sharing'
  }
]; 