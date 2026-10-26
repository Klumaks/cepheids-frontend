import type { FormEvent } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Alert from "react-bootstrap/Alert";
import type { CepheidCalibrationRange } from "../types/spectralClass";
interface CepheidFilterProps {
  range: CepheidCalibrationRange;
  error: string;
  onChange: (range: CepheidCalibrationRange) => void;
  onApply: () => void;
}
export function CepheidFilter({
  range,
  error,
  onChange,
  onApply,
}: CepheidFilterProps) {
  const submit = (event: FormEvent) => {
    event.preventDefault();
    onApply();
  };
  return (
    <Form className="cepheid-filter" onSubmit={submit}>
      {(
        [
          { title: "Наклон a", min: "min_slope", max: "max_slope" },
          { title: "Свободный член b", min: "min_b", max: "max_b" },
        ] as const
      ).map((group) => (
        <fieldset key={group.min}>
          <legend>
            {group.title}: от <output>{range[group.min].toFixed(2)}</output> до{" "}
            <output>{range[group.max].toFixed(2)}</output>
          </legend>
          <Form.Range
            aria-label={`${group.title}: минимум`}
            min={-5}
            max={0}
            step={0.01}
            value={range[group.min]}
            onChange={(event) =>
              onChange({ ...range, [group.min]: Number(event.target.value) })
            }
          />
          <Form.Range
            aria-label={`${group.title}: максимум`}
            min={-5}
            max={0}
            step={0.01}
            value={range[group.max]}
            onChange={(event) =>
              onChange({ ...range, [group.max]: Number(event.target.value) })
            }
          />
        </fieldset>
      ))}
      {error && (
        <Alert variant="danger" role="alert">
          {error}
        </Alert>
      )}
      <Button type="submit" className="cepheid-find">
        Найти
      </Button>
    </Form>
  );
}
