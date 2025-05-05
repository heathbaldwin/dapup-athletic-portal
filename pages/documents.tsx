import Sidebar from '../components/Sidebar';

const dummyDocs = [
  { athlete: 'Maya Carter', type: '1099 Form', year: 2024, link: '#' },
  { athlete: 'Jalen Brooks', type: 'Signed Deal Contract', year: 2025, link: '#' },
  { athlete: 'Liam James', type: '1099 Form', year: 2024, link: '#' },
];

export default function Documents() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="ml-64 p-8 w-full">
        <h1 className="text-3xl font-semibold mb-4">Documents</h1>
        <table className="w-full table-auto border-collapse bg-white rounded shadow">
          <thead className="bg-gray-100 text-left">
            <tr>
              <th className="p-3">Athlete</th>
              <th className="p-3">Document Type</th>
              <th className="p-3">Year</th>
              <th className="p-3">Link</th>
            </tr>
          </thead>
          <tbody>
            {dummyDocs.map((doc, idx) => (
              <tr key={idx} className="border-t hover:bg-gray-50">
                <td className="p-3">{doc.athlete}</td>
                <td className="p-3">{doc.type}</td>
                <td className="p-3">{doc.year}</td>
                <td className="p-3">
                  <a href={doc.link} className="text-blue-600 underline">
                    View Document
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
}
