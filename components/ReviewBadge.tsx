/**
 * Review badge for blog post headers.
 * Displays stars, rating, and overlapping avatar stack. Positioned in the left margin
 * via absolute positioning (parent must have position: relative).
 */
export default function ReviewBadge() {
  const avatars = [
    { initials: "GA" },
    { initials: "NT" },
    { initials: "CL" },
    { initials: "AI" },
  ];
  const avatarBg = "bg-blue-500"; // soft, professional blue for all profile icons

  return (
    <div
      className="absolute top-0 mr-3 hidden min-w-0 shrink-0 flex-col gap-3 overflow-hidden rounded-xl border border-zinc-200 bg-white py-5 pl-7 pr-4 shadow-sm dark:border-zinc-800 dark:bg-black xl:flex"
      style={{ width: "232px", left: "-252px" }}
      aria-label="Rated 4.9 out of 5 by 54 reviewers"
    >
      {/* Stars and rating on one line */}
      <div className="flex min-w-0 items-center gap-2">
        <span className="text-lg leading-none text-amber-500 dark:text-amber-400" aria-hidden>
          ★★★★★
        </span>
        <span className="text-sm font-semibold text-zinc-700 dark:text-zinc-300">4.9</span>
      </div>

      {/* Avatar row: overlapping circles; left padding keeps overlap inside container */}
      <div className="flex min-w-0 items-center">
        {avatars.map((avatar, index) => (
          <div
            key={avatar.initials}
            className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-white text-xs font-semibold text-white dark:border-zinc-950 dark:border-black"
            style={{ marginLeft: index === 0 ? 0 : -8 }}
            title={avatar.initials}
          >
            <span className={`${avatarBg} flex h-full w-full items-center justify-center rounded-full text-white`}>
              {avatar.initials}
            </span>
          </div>
        ))}
        <div
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 border-white bg-zinc-200 text-xs font-semibold text-zinc-700 dark:border-zinc-950 dark:border-black dark:bg-zinc-700 dark:text-zinc-200"
          style={{ marginLeft: -8 }}
          title="+50 more"
        >
          +50
        </div>
      </div>
    </div>
  );
}
