function SummaryCard({ title, value, type }) {
    return (
        <div className="card h-100 border-0 shadow-sm">
            <div className="card-body">
                <h6 className="text-secondary mb-2">{title}</h6>
                <h3 className="fw-bold mb-0">{value}</h3>
            </div>
        </div>
    )
}

export default SummaryCard