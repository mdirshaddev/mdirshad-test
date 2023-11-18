"use client";

import { Icons } from "src/configs/icons";
import { Avatar, AvatarFallback, AvatarImage } from "src/components/avatar";

export type SocialAccountsConfig = typeof socialAccountsConfig;

export const socialAccountsConfig = [
  {
    AccountIcon: Icons.social.github,
    ContentForTooltip: () => (
      <div className="flex justify-between space-x-4">
        <Avatar>
          <AvatarImage src="https://avatars.githubusercontent.com/u/68414911?u=792d1bc1e45ef3fb7a4f6763de3569ae3b077434&v=4" />
          <AvatarFallback>MI</AvatarFallback>
        </Avatar>
        <div className="space-y-1">
          <h4 className="text-sm font-semibold">@mdirshaddev</h4>
          <p className="text-sm">
            Building, contributing to OSS projects working with pipelines or
            workflows
          </p>
          <div className="flex items-center pt-2">
            <Icons.calendar className="mr-2 h-4 w-4 opacity-70" />{" "}
            <span className="text-xs text-muted-foreground">
              Joined 16, July 2020
            </span>
          </div>
        </div>
      </div>
    ),
    href: "https://github.com/mdirshaddev",
    name: "GitHub",
    ShortcutIcon: Icons.directions.arrowUpRight,
  },
  {
    AccountIcon: Icons.social.twitter,
    ContentForTooltip: () => (
      <div className="flex justify-between space-x-4">
        <Avatar>
          <AvatarImage src="https://avatars.githubusercontent.com/u/68414911?u=792d1bc1e45ef3fb7a4f6763de3569ae3b077434&v=4" />
          <AvatarFallback>MI</AvatarFallback>
        </Avatar>
        <div className="space-y-1">
          <h4 className="text-sm font-semibold">@mdirshaddev</h4>
          <p className="text-sm">A Platform for sharing thoughts and memes.</p>
          <div className="flex items-center pt-2">
            <Icons.calendar className="mr-2 h-4 w-4 opacity-70" />{" "}
            <span className="text-xs text-muted-foreground">
              Joined May 2020
            </span>
          </div>
        </div>
      </div>
    ),
    href: "https://twitter.com/mdirshaddev",
    name: "Twitter",
    ShortcutIcon: Icons.directions.arrowUpRight,
  },
  {
    AccountIcon: Icons.social.codesandbox,
    ContentForTooltip: () => (
      <div className="flex justify-between space-x-4">
        <Avatar>
          <AvatarImage src="https://avatars.githubusercontent.com/u/68414911?u=792d1bc1e45ef3fb7a4f6763de3569ae3b077434&v=4" />
          <AvatarFallback>MI</AvatarFallback>
        </Avatar>
        <div className="space-y-1">
          <h4 className="text-sm font-semibold">@mdirshaddev</h4>
          <p className="text-sm">
            A Place where I build prototypes or poc for business use cases.
          </p>
          <div className="flex items-center pt-2">
            <Icons.calendar className="mr-2 h-4 w-4 opacity-70" />{" "}
            <span className="text-xs text-muted-foreground">
              Joined May 2020
            </span>
          </div>
        </div>
      </div>
    ),
    href: "https://codesandbox.io/u/mdirshaddev",
    name: "Codesandbox",
    ShortcutIcon: Icons.directions.arrowUpRight,
  },
  {
    AccountIcon: Icons.social.linkedin,
    ContentForTooltip: () => (
      <div className="flex justify-between space-x-4">
        <Avatar>
          <AvatarImage src="https://avatars.githubusercontent.com/u/68414911?u=792d1bc1e45ef3fb7a4f6763de3569ae3b077434&v=4" />
          <AvatarFallback>MI</AvatarFallback>
        </Avatar>
        <div className="space-y-1">
          <h4 className="text-sm font-semibold">@mdirshaddev</h4>
          <p className="text-sm">My Professional journey on IT career path.</p>
          <div className="flex items-center pt-2">
            <Icons.calendar className="mr-2 h-4 w-4 opacity-70" />{" "}
            <span className="text-xs text-muted-foreground">Joined 2019</span>
          </div>
        </div>
      </div>
    ),
    href: "https://www.linkedin.com/in/mdirshaddev",
    name: "LinkedIn",
    ShortcutIcon: Icons.directions.arrowUpRight,
  },
  {
    AccountIcon: Icons.social.gitlab,
    ContentForTooltip: () => (
      <div className="flex justify-between space-x-4">
        <Avatar>
          <AvatarImage src="https://avatars.githubusercontent.com/u/68414911?u=792d1bc1e45ef3fb7a4f6763de3569ae3b077434&v=4" />
          <AvatarFallback>MI</AvatarFallback>
        </Avatar>
        <div className="space-y-1">
          <h4 className="text-sm font-semibold">@mdirshaddev</h4>
          <p className="text-sm">
            Another code repository famous among enterprise for DevOps.
          </p>
          <div className="flex items-center pt-2">
            <Icons.calendar className="mr-2 h-4 w-4 opacity-70" />{" "}
            <span className="text-xs text-muted-foreground">Joined 2023</span>
          </div>
        </div>
      </div>
    ),
    href: "https://gitlab.com/mdirshaddev",
    name: "Gitlab",
    ShortcutIcon: Icons.directions.arrowUpRight,
  },
  {
    AccountIcon: Icons.social.freecodecamp,
    ContentForTooltip: () => (
      <div className="flex justify-between space-x-4">
        <Avatar>
          <AvatarImage src="https://avatars.githubusercontent.com/u/68414911?u=792d1bc1e45ef3fb7a4f6763de3569ae3b077434&v=4" />
          <AvatarFallback>MI</AvatarFallback>
        </Avatar>
        <div className="space-y-1">
          <h4 className="text-sm font-semibold">@mdirshaddev</h4>
          <p className="text-sm">Learning platform and getting certified.</p>
          <div className="flex items-center pt-2">
            <Icons.calendar className="mr-2 h-4 w-4 opacity-70" />{" "}
            <span className="text-xs text-muted-foreground">
              Joined July 2021
            </span>
          </div>
        </div>
      </div>
    ),
    href: "https://www.freecodecamp.org/mdirshaddev",
    name: "FreeCodeCamp",
    ShortcutIcon: Icons.directions.arrowUpRight,
  },
  {
    AccountIcon: Icons.social.arduino,
    ContentForTooltip: () => (
      <div className="flex justify-between space-x-4">
        <Avatar>
          <AvatarImage src="https://avatars.githubusercontent.com/u/68414911?u=792d1bc1e45ef3fb7a4f6763de3569ae3b077434&v=4" />
          <AvatarFallback>MI</AvatarFallback>
        </Avatar>
        <div className="space-y-1">
          <h4 className="text-sm font-semibold">@mdirshaddev</h4>
          <p className="text-sm">As an hobbyist love to play with IoT</p>
          <div className="flex items-center pt-2">
            <Icons.calendar className="mr-2 h-4 w-4 opacity-70" />{" "}
            <span className="text-xs text-muted-foreground">Joined 2023</span>
          </div>
        </div>
      </div>
    ),
    href: "https://projecthub.arduino.cc/irshaddev",
    name: "Arduino",
    ShortcutIcon: Icons.directions.arrowUpRight,
  },
];
