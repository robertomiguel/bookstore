export const descriptionText = (props: { description: string }) => (
    <>
        <div className="text">{props.description}</div>
        <style jsx>
            {`
                .text {
                    max-height: 100px;
                    overflow: scroll;
                }
            `}
        </style>
    </>
)
