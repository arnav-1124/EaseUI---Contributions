import { Navbar } from "@/components/navbar";
import ComponentDemo from "../ComponentsDemo";
import { Button } from "@/components";

const NavbarPage = () => {
  const usageCode = `import { Navbar } from "@/components/navbar";
import { Button } from "@/components/Button";

<Navbar variant="dark" size="default">
  <div className="font-semibold">EaseUI</div>

  <div className="flex items-center gap-6">
    <a href="#">Components</a>
    <a href="#">About</a>
    <a href="#">Templates</a>
  </div>

  <Button variant="ghost">Get Started</Button>
</Navbar>`;

  return (
    <div>
      <ComponentDemo code={usageCode}>
        <Navbar variant="dark" size="default">
          <div className="font-semibold">EaseUI</div>

          <div className="flex items-center gap-6">
            <a href="#">Components</a>
            <a href="#">About</a>
            <a href="#">Templates</a>
          </div>

          <Button variant="ghost">Get Started</Button>
        </Navbar>
      </ComponentDemo>
    </div>
  );
};

export default NavbarPage;
