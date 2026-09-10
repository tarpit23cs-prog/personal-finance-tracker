import SummaryCard from './SummaryCard'

function SummaryCards() {
    return (
        <section className="row g-3">
            <div className="col-12 col-md-6 col-lg-3">
                <SummaryCard
                    title="Total Balance"
                    value="₹1,84,320"
                    type="balance"
                />
            </div>

            <div className="col-12 col-md-6 col-lg-3">
                <SummaryCard
                    title="Income"
                    value="₹62,000"
                    type="income"
                />

            </div>

            <div className="col-12 col-md-6 col-lg-3">
                <SummaryCard
                    title="Expenses"
                    value="₹38,450"
                    type="expense"
                />
            </div>

            <div className="col-12 col-md-6 col-lg-3">
                <SummaryCard
                    title="Investments"
                    value="₹1,42,500"
                    type="investment"
                />
            </div>
        </section>
    )
}

export default SummaryCards