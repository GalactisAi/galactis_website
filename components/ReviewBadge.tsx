/**
 * Review badge for blog post headers.
 * Displays stars, rating, and overlapping avatar stack. Positioned in the left margin
 * via absolute positioning (parent must have position: relative).
 */
export default function ReviewBadge() {
  const avatars = [
    { initials: "GA", bg: "bg-purple-500" },
    { initials: "NT", bg: "bg-indigo-500" },
    { initials: "CL", bg: "bg-violet-500" },
    { initials: "AI", bg: "bg-fuchsia-500" },
  ];

  return (
    <div
      className="absolute top-0 mr-3 hidden min-w-0 shrink-0 flex-col gap-5 overflow-hidden rounded-xl border border-zinc-200 bg-white py-9 pl-10 pr-6 shadow-sm dark:border-zinc-800 dark:bg-black xl:flex"
      style={{ width: "296px", left: "-316px" }}
      aria-label="Rated 4.9 out of 5 by 54 reviewers"
    >
      {/* Stars and rating on one line */}
      <div className="flex min-w-0 items-center gap-3">
        <span className="text-3xl leading-none text-amber-500 dark:text-amber-400" aria-hidden>
          ★★★★★
        </span>
        <span className="text-xl font-semibold text-zinc-700 dark:text-zinc-300">4.9</span>
      </div>

      {/* Avatar row: overlapping circles; left padding keeps overlap inside container */}
      <div className="flex min-w-0 items-center">
        {avatars.map((avatar, index) => (
          <div
            key={avatar.initials}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-white text-sm font-semibold text-white dark:border-zinc-950 dark:border-black"
            style={{ marginLeft: index === 0 ? 0 : -12 }}
            title={avatar.initials}
          >
            <span className={`${avatar.bg} flex h-full w-full items-center justify-center rounded-full`}>
              {avatar.initials}
            </span>
          </div>
        ))}
        <div
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-white bg-zinc-200 text-sm font-semibold text-zinc-700 dark:border-zinc-950 dark:border-black dark:bg-zinc-700 dark:text-zinc-200"
          style={{ marginLeft: -12 }}
          title="+50 more"
        >
          +50
        </div>
      </div>
    </div>
  );
}
