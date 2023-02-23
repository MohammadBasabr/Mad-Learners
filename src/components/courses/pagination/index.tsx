interface PaginationProps {
    totalLessons: number | undefined
    pageSize: number
    currentPage: number
    onPageChange: any
}

export const Pagination: React.FC<PaginationProps> = ({
    totalLessons,
    pageSize,
    currentPage,
    onPageChange,
}) => {
    const pagesCount = Math.ceil(totalLessons as number / pageSize);
    if (pagesCount === 1) return null;
    const p = []
    for (let index = 0; index < pagesCount; index++) {
        p.push(index + 1)
    }
    return (
        <nav className="flex justify-center gap-2">
            {p.map((page) => {
                return (
                    <a key={page} className={`cursor-pointer w-8 aspect-square flex justify-center items-center rounded-md ${page === currentPage ? "bg-light-hover dark:bg-dark-hover text-light-primary dark:text-dark-primary" : "bg-light-secondary dark:bg-dark-secondary text-light-content dark:text-dark-content "}`} onClick={() => onPageChange(page)}>
                        {page}
                    </a>
                );
            })}
        </nav>
    );
};