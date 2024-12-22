import "@testing-library/jest-dom";

jest.mock("next/image", () => ({
  __esModule: true,
  default: (props) => {
    const { priority, loading, unoptimized, objectFit, fill, ...rest } = props;
    return <img {...rest} />;
  },
}));

jest.mock("next/link", () => ({
  __esModule: true,
  default: ({ children, ...props }) => {
    return <a {...props}>{children}</a>;
  },
}));

jest.mock("next/navigation", () => ({
  useRouter: jest.fn(),
  useSearchParams: jest.fn(),
}));
