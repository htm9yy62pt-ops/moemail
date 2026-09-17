"use client"

import Link from "next/link"

export function Logo() {
  return (
    <Link
      href="/"
      className="flex items-center gap-2 hover:opacity-80 transition-opacity"
    >
      <div className="relative w-8 h-8">
        <div className="absolute inset-0 grid grid-cols-8 grid-rows-8 gap-px">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-neutral-900 dark:text-neutral-100"
          >
            {/* 信封主体 */}
            <path
              d="M4 8h24v16H4V8z"
              className="fill-neutral-900/5 dark:fill-neutral-100/5"
            />
            
            {/* 信封边框 */}
            <path
              d="M4 8h24v2H4V8zM4 22h24v2H4v-2z"
              className="fill-neutral-900 dark:fill-neutral-100"
            />
            
            {/* @ 符号 */}
            <path
              d="M14 12h4v4h-4v-4zM12 14h2v4h-2v-4zM18 14h2v4h-2v-4zM14 18h4v2h-4v-2z"
              className="fill-neutral-900 dark:fill-neutral-100"
            />
            
            {/* 折线装饰 */}
            <path
              d="M4 8l12 8 12-8"
              className="stroke-neutral-900 dark:stroke-neutral-100 stroke-2"
              fill="none"
            />
            
            {/* 装饰点 */}
            <path
              d="M8 18h2v2H8v-2zM22 18h2v2h-2v-2z"
              className="fill-neutral-900/60 dark:fill-neutral-100/60"
            />
            
            {/* 底部装饰线 */}
            <path
              d="M8 14h2v2H8v-2zM22 14h2v2h-2v-2z"
              className="fill-neutral-900/40 dark:fill-neutral-100/40"
            />
          </svg>
        </div>
      </div>
      <span className="font-bold tracking-wider text-neutral-900 dark:text-neutral-100">
        TempQue
      </span>
    </Link>
  )
}
