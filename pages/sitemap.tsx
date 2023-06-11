import fs from 'fs';
import path from 'path';

export async function getStaticProps() {
  const files: string[] = fs.readdirSync(path.resolve('./public'));

  return {
    props: {
      files,
    },
  };
}

export default function Sitemap({ files }: { files: string[] }) {
  return (
    <ul>
      {files.map((file) => (
        <li key={file}>{file}</li>
      ))}
    </ul>
  );
}

