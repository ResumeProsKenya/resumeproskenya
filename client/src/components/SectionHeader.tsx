interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

export default function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <div className="text-center mb-16">
      <h2 className="section-header inline-block px-6 py-2 mb-4 text-3xl md:text-4xl font-montserrat font-bold bg-gradient-to-r from-gray-50 via-red-50 to-green-50 rounded-lg">
        <span className="bg-gradient-to-r from-black via-red-600 to-green-600 bg-clip-text text-transparent">
          {title}
        </span>
      </h2>
      {subtitle && <p className="text-lg text-gray-600">{subtitle}</p>}
    </div>
  );
}
