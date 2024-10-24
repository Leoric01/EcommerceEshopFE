export const accountStatuses = [
  {
    status: "PENDING_VERIFICATION",
    title: "Pending Verification",
    description: "Account waiting for verification",
  },
  {
    status: "ACTIVE",
    title: "Active",
    description: "Account is active and in good standing",
  },
  {
    status: "SUSPENDED",
    title: "Suspended",
    description:
      "Account is temporarily suspended due to policy violations or unresolved issues",
  },
  {
    status: "DEACTIVATED",
    title: "Deactivated",
    description:
      "Account is deactivated by the user, can be reactivated anytime",
  },
  {
    status: "BANNED",
    title: "Banned",
    description:
      "Account is permanently banned due to serious violations of terms of service",
  },
  {
    status: "CLOSED",
    title: "Closed",
    description:
      "Account is permanently closed either by user request or due to inactivity",
  },
];
