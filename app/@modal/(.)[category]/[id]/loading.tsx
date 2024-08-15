import Modal from "@/components/Modal";

export default function loading() {
  return (
    <Modal>
      <section className="w-full border-2 rounded-lg p-4 bg-gray-300">
        <h2 className="text-xl text-black">Loading ...(3 second delay)</h2>
      </section>
    </Modal>
  );
}
